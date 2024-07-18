import { axiosInstance } from '../instances';
import axios from 'axios';

interface RenewTokenResponse {
  applicationAccessToken: string;
}

// accessToken 만료시 token들을 재발급
export const renewTokens = async () => {
  try {
    const response = await axiosInstance.post<RenewTokenResponse>('/auth/renewTokens');
    return response.data.applicationAccessToken;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.status);
      window.location.href = '/signIn';
    }
    return null;
  }
};
