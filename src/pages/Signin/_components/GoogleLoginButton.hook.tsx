import { CredentialResponse } from '@react-oauth/google';
import { useUserStore } from '../../../../store/useUserStore';
import { GoogleUserData } from '../_types/types';
import { jwtDecode } from 'jwt-decode';

export default function useGoogleLoginButton() {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const { setUser } = useUserStore();

  const handleLogin = (response: CredentialResponse) => {
    const { credential } = response;

    if (credential) {
      const { email, name, picture } = jwtDecode<GoogleUserData>(credential);
      setUser({ email, name, picture });

      // 리다이렉션
      window.location.href = '/main';
    }
  };

  const handleError = () => {
    console.log('로그인 실패');
  };

  return { clientId, handleLogin, handleError };
}
