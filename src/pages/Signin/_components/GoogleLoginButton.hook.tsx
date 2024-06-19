import { CredentialResponse } from '@react-oauth/google';
import { useUserStore } from '../../../../store/useUserStore';
import { GoogleUserData } from '../_types/types';
import axios from 'axios';

export default function useGoogleLoginButton() {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  // const { setUser } = useUserStore();

  const handleLogin = async (response: CredentialResponse) => {
    try {
      const { credential } = response;

      if (credential) {
        const response = await axios.post('http://localhost:8080/api/auth/google', {
          credential,
        });
        console.log(response.data);
      }
    } catch (error) {
      console.error('로그인 중 에러 발생', error);
    }

    console.log('로그인 성공');
  };

  const handleError = () => {
    console.log('로그인 실패');
  };

  return { clientId, handleLogin, handleError };
}
