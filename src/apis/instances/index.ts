import axios, { AxiosError } from 'axios';
import { handleAxiosError } from '../../utils/handleAxiosError';
import { handleUnexpectedError } from '../../utils/handleUnexpectedError';
import getAccessToken from '../../utils/getAccessToken';
import { renewTokens } from '../services/auth';

const baseURL = process.env.API_URL;

// 기본 axios instance
export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
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
  (config) => {
    // 토큰을 가져온다. useApplicationAuthTokenStore()는
    // hook을 사용하는 것이기 때문에 .getState()를 사용한다.
    const accessToken = getAccessToken();
    console.log('엑세스 토큰', accessToken);

    // 만약 토큰이 존재하는 경우 헤더에 넣어준다.
    if (accessToken) {
      config.headers['authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstanceWithToken.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    if (!axios.isAxiosError(error)) {
      handleUnexpectedError(error);
      return Promise.reject(error);
    }

    // accessToken 만료시 재발급
    if (error.response?.status === 401) {
      const originalRequest = error.config;
      await renewTokens();
      const accessToken = getAccessToken();
      if (accessToken && originalRequest) {
        originalRequest.headers['authorization'] = `Bearer ${accessToken}`;
        return axiosInstanceWithToken(originalRequest);
      }
    }

    handleAxiosError(error);
    return Promise.reject(error);
  },
);
