import { axiosInstance } from '../instances';

interface RenewTokenResponse {
  applicationAccessToken: string;
}

// accessToken 만료시 token들을 재발급
export const renewTokens = async () => {
  try {
    const response = await axiosInstance.post<RenewTokenResponse>('/auth/renewTokens');
    return response.data.applicationAccessToken;
  } catch (error) {
    console.error(error);
    return error;
  }
};
