import axios, { AxiosError } from 'axios';
import { handleAxiosError } from '../../utils/handleAxiosError';
import { handleUnexpectedError } from '../../utils/handleUnexpectedError';
import { renewTokens } from '../services/auth';
import { useApplicationAuthTokenStore } from '@/store/useAuthStore';

const baseURL = process.env.API_URL;

// 기본 axios instance
export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const axiosInstanceWithToken = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// request interceptor의 경우 token을 넣을 때 자주 사용한다.
axiosInstanceWithToken.interceptors.request.use(
  (AxiosRequestConfig) => {
    const { accessToken } = useApplicationAuthTokenStore.getState();

    // 만약 토큰이 존재하는 경우 헤더에 넣어준다.
    if (accessToken) {
      AxiosRequestConfig.headers['authorization'] = `Bearer ${accessToken}`;
    }
    return AxiosRequestConfig;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

axiosInstanceWithToken.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (!axios.isAxiosError(error)) {
      handleUnexpectedError(error);
      return Promise.reject(error);
    }

    // accessToken 관리
    // refreshToken가 문제가 있는 경우 renewTokens함수에서 에러처리
    try {
      const { setAccessToken } = useApplicationAuthTokenStore.getState();
      const originalRequest = error.config;

      if (error.response?.status === 401) {
        // accessToken 갱신
        const newAccessToken = await renewTokens();
        if (typeof newAccessToken === 'string') {
          // 상태 업데이트 후 새로운 accessToken 값 가져오기
          return new Promise((resolve, reject) => {
            // Promise로 subscribe를 사용해 accessToken이 업데이트 되었을 때까지 기다림
            const unsubscribe = useApplicationAuthTokenStore.subscribe((state) => {
              // 비동기적으로 accessToken이 업데이트 되면 조건문을 만족하게 됨
              if (state.accessToken === newAccessToken) {
                // 일단 unsubscribe
                unsubscribe();
                if (originalRequest) {
                  // 새로운 accessToken으로 요청 재시도
                  originalRequest.headers['authorization'] = `Bearer ${state.accessToken}`;
                  resolve(axiosInstanceWithToken(originalRequest));
                } else {
                  reject(new Error('Original request is missing'));
                }
              }
            });
            // 비동기적으로 accessToken 업데이트
            setAccessToken(newAccessToken);
          });
        }
      }
    } catch (error: unknown) {
      if (!axios.isAxiosError(error)) {
        handleUnexpectedError(error);
        return Promise.reject(error);
      }
    }

    handleAxiosError(error);
    return Promise.reject(error);
  },
);
