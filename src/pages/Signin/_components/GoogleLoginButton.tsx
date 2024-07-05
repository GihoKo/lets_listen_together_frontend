import { useGoogleLogin } from '@react-oauth/google';
import { axiosInstanceWithToken } from '../../../../apis/instances';
import { useApplicationAuthTokenStore, useGoogleOAuthTokenStore } from '../../../store/useAuthStore';
import { useUserStore } from '../../../store/useUserStore';
import { useNavigate } from 'react-router-dom';

export default function GoogleLoginButton() {
  const navigate = useNavigate();
  const { setAccessToken } = useApplicationAuthTokenStore();
  const { setGoogleOAuthToken } = useGoogleOAuthTokenStore();
  const { setUser } = useUserStore();
  const login = useGoogleLogin({
    scope: 'email profile',
    onSuccess: async ({ code }) => {
      try {
        await axiosInstanceWithToken.post('/auth/google/callback', { code }).then((response) => {
          setAccessToken(response.data.applicationToken.accessToken);
          setGoogleOAuthToken(response.data.googleToken.googleAccessToken);
          setUser(response.data.user);

          // refresh token의 경우 백엔드에서 cookie로 보내주기 때문에 따로 저장할 필요가 없다.
          if (
            response.data.user &&
            response.data.applicationToken.accessToken &&
            response.data.googleToken.googleAccessToken
          ) {
            navigate('/main');
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
    onError: (error) => {
      console.error(error);
    },
    flow: 'auth-code',
  });
  return <button onClick={login}>로그인</button>;
}
