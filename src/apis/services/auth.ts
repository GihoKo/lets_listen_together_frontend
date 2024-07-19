import { axiosInstance } from '../instances';
import axios from 'axios';

// accessToken 만료시 token들을 재발급
export const renewTokens = async () => {
  try {
    const response = await axiosInstance.post('/auth/renewTokens');
    return response.data.applicationAccessToken;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.status);
      window.location.href = '/signIn';
      throw new Error('토큰이 만료되었습니다. 다시 로그인해주세요.');
    }
    return null;
  }
};
