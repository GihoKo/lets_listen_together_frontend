import { AxiosError } from 'axios';
import logger from './logger';

export const handleAxiosError = (error: AxiosError) => {
  // status를 받기보다는 error 객체 자체를 받아서
  // error.response.data.message를 통해서 에러 메시지를 받는 것이 좋을듯.
  // 콘솔에 에러 메시지를 띄워주기만하는 간단한 에러의 경우 여기서 처리

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
      logger({ error, context: 'Client Request Error' });
      break;
    case 404:
      logger({ error, context: 'Resource Not Found' });
      break;
    case 500:
      logger({ error, context: 'Internal Server Error' });
      break;
    case 503:
      logger({ error, context: 'Service Unavailable' });
      break;
    default:
      logger({ error, context: 'Unknown Error' });
      break;
  }
};
