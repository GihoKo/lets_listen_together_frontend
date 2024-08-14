import axios, { AxiosError } from 'axios';
import { handleAxiosError } from '../../utils/handleAxiosError';
import { handleUnexpectedError } from '../../utils/handleUnexpectedError';
import { renewTokens } from '../services/auth';
import AccessTokenManager from '@/authentication/accessTokenManager';

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
    const accessToken = AccessTokenManager.getAccessToken();

    // 만약 토큰이 존재하는 경우 헤더에 넣어준다.
    if (AccessTokenManager.hasAccessToken()) {
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
      const originalRequest = error.config;

      if (error.response?.status === 401) {
        // accessToken 갱신
        const newAccessToken = await renewTokens();

        AccessTokenManager.setAccessToken(newAccessToken);

        const accessToken = AccessTokenManager.getAccessToken();

        if (originalRequest) {
          // 새로운 accessToken으로 요청 재시도
          originalRequest.headers['authorization'] = `Bearer ${accessToken}`;
          axiosInstanceWithToken(originalRequest);
        } else {
          new Error('Original request is missing');
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
