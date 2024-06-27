import { AxiosError } from 'axios';

export const handleAxiosError = (error: AxiosError) => {
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
