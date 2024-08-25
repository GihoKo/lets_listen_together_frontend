import logger from '@/utils/logger';
import { axiosInstance } from '../instances';
import axios from 'axios';

// accessToken 만료시 token들을 재발급
export const renewTokens = async () => {
  try {
    const response = await axiosInstance.post('/auth/renewTokens');
    return response.data.applicationAccessToken;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      logger({ error, context: 'renewTokens' });
      window.location.href = '/signIn';
    }
    return null;
  }
};
