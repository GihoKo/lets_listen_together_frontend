import { useGoogleLogin } from '@react-oauth/google';
import { instanceIncludeToken } from '../../../../apis/instances';

export default function GoogleLoginButton() {
  const login = useGoogleLogin({
    scope: 'email profile',
    onSuccess: async ({ code }) => {
      try {
        await instanceIncludeToken.post('/auth/google/callback', { code }).then((response) => {
          console.log(response);
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
