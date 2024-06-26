import axios, { AxiosError } from 'axios';

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

const handleAxiosError = (error: AxiosError) => {
  // status를 받기보다는 error 객체 자체를 받아서
  // error.response.data.message를 통해서 에러 메시지를 받는 것이 좋을듯.

  // 400대 코드
  // 400 Bad Request : 클라이언트 요청 오류
  // 401 Unauthorized : 인증 필요, 로그인 X
  // 403 Forbidden : 권한 부족
  // 404 Not Found : 리소스 없음

  // 500대 코드
  // 500 Internal Server Error : 서버 오류
  // 503 Service Unavailable : 서비스 이용 불가

  if (!error.response) return;
  switch (error.response.status) {
    case 400:
      console.error(`클라이언트 요청 오류 : ${error.message}`);
      break;
    case 401:
      console.error(`권한이 없습니다. 로그인이 필요합니다. : ${error.message}`);
      window.location.href = '/signin';
      break;
    case 403:
      console.error(`권한이 부족합니다. : ${error.message}`);
      break;
    case 404:
      console.error(`리소스가 존재하지 않습니다. : ${error.message}`);
      break;
    case 500:
      console.error(`서버 오류입니다. 잠시 후 다시 시도해주세요. : ${error.message}`);
      break;
    case 503:
      console.error(`서비스 이용이 불가합니다. 잠시 후 다시 시도해주세요. : ${error.message}`);
      break;
    default:
      console.error(`알 수 없는 오류입니다. : ${error.message}`);
      break;
  }
};

const handleUnexpectedError = (error: unknown) => {
  if (error instanceof Error) {
    console.error('알 수 없는 오류입니다.');
  }
  return;
};

// response interceptor의 경우
// 1. 서버로 부터 반환된 응답처리
// 2. 특정 상태 코드에 따른 작업을 수행
// 3. 로딩 상태 관리 -> tanstack query를 사용
// 4. 공통 오류 메시지 처리
// 5. 특정 상태 코드에 따른 전역 처리
// 에 사용된다.
instanceIncludeToken.interceptors.response.use(
  (response) => {
    // 요청이 성공한 경우 굳이 로그를 띄워줄 필요는 없음.
    // 200대 코드
    // 200 OK : 요청 성공
    // 201 Created : 요청 성공, 리소스 생성
    // 204 No Content : 요청 성공, 리소스 삭제

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
