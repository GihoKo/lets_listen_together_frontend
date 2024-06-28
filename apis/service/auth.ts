import axios from 'axios';
import { instanceIncludeToken } from '../instances';

// accessToken 만료시 token들을 재발급
export const renewTokens = async () => {
  try {
    const response = await instanceIncludeToken.post('/auth/renewTokens');
    return response.data;
  } catch (error) {
    if (!axios.isAxiosError(error)) {
      console.error('에러가 발생했습니다.');
      return;
    }
    if (error.response?.status === 401) {
      console.error('리프레시 토큰이 만료됐습니다. 다시 로그인해주세요.');
      window.location.href = '/signIn';
    }
  }
};
