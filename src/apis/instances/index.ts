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

    // 토큰 관리
    try {
      const { setAccessToken } = useApplicationAuthTokenStore.getState();
      const originalRequest = error.config;

      // 1. accessToken이 없거나 만료된 경우
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
      // 2. accessToken을 새로 요청했을 때 refreshToken이 만료되거나 잘못된 경우 로그아웃 처리
      if (error.response?.status === 401) {
        window.location.href = '/signIn';
        return null;
      }
    }

    handleAxiosError(error);
    return Promise.reject(error);
  },
);
