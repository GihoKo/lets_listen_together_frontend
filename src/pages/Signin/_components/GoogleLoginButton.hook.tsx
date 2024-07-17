// libraries
import { axiosInstanceWithToken } from '../../../apis/instances';

// hooks
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { useApplicationAuthTokenStore, useGoogleOAuthTokenStore } from '../../../store/useAuthStore';
import { useUserStore } from '../../../store/useUserStore';

export default function useGoogleLoginButton() {
  const navigate = useNavigate();
  const { accessToken, setAccessToken } = useApplicationAuthTokenStore.getState();
  const { googleOAuthToken, setGoogleOAuthToken } = useGoogleOAuthTokenStore.getState();
  const { user, setUser } = useUserStore();
  const login = useGoogleLogin({
    scope: 'email profile',
    onSuccess: async ({ code }) => {
      try {
        await axiosInstanceWithToken.post('/auth/google/callback', { code }).then((response) => {
          console.log(response.data);
          setAccessToken(response.data.applicationAccessToken);
          setGoogleOAuthToken(response.data.googleAccessToken);
          setUser(response.data.user);
        });

        if (accessToken && googleOAuthToken && user) {
          navigate('/main');
        }
      } catch (error) {
        console.error(error);
      }
    },
    onError: (error) => {
      console.error(error);
    },
    flow: 'auth-code',
  });

  return { login };
}
