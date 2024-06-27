import axios from 'axios';
import { handleAxiosError } from '../../src/utils/handleAxiosError';
import { handleUnexpectedError } from '../../src/utils/handleUnexpectedError';

const baseURL = process.env.API_URL;

// 기본 axios instance
export const defaultInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const instanceIncludeToken = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// request interceptor의 경우 token을 넣을 때 자주 사용한다.
instanceIncludeToken.interceptors.request.use(
  (config) => {
    // 토큰을 가져온다.
    const token = localStorage.getItem('token');

    // 만약 토큰이 존재하는 경우 헤더에 넣어준다.
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// response interceptor의 경우
// 1. 서버로 부터 반환된 응답처리
// 2. 특정 상태 코드에 따른 작업을 수행
// 3. 로딩 상태 관리 -> tanstack query를 사용
// 4. 공통 오류 메시지 처리
// 5. 특정 상태 코드에 따른 전역 처리
// 에 사용된다.
instanceIncludeToken.interceptors.response.use(
  (response) => {
    /** @Think 300대 코드는 어떻게 처리되는가? */

    return response;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      handleUnexpectedError(error);
    }

    return Promise.reject(error);
  },
);
