// libraries
import { axiosInstanceWithToken } from '../../../apis/instances';

// hooks
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { useGoogleOAuthTokenStore } from '../../../store/useAuthStore';
import { useUserStore } from '../../../store/useUserStore';

// token
import AccessTokenManager from '@/authentication/AccessTokenManager';

export default function useGoogleLoginButton() {
  const navigate = useNavigate();
  const { setGoogleOAuthToken } = useGoogleOAuthTokenStore.getState();
  const { setUser } = useUserStore();
  const login = useGoogleLogin({
    scope: 'email profile',
    onSuccess: async ({ code }) => {
      try {
        await axiosInstanceWithToken.post('/auth/google/callback', { code }).then((response) => {
          setGoogleOAuthToken(response.data.googleAccessToken);
          AccessTokenManager.setAccessToken(response.data.applicationAccessToken);
          setUser(response.data.user);
        });

        if (AccessTokenManager.hasAccessToken()) {
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
