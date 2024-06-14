import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import useGoogleLoginButton from './GoogleLoginButton.hook';

export default function GoogleLoginButton() {
  const { clientId, handleLogin, handleError } = useGoogleLoginButton();

  return (
    <>
      {clientId === undefined ? (
        'GOOGLE_OAUTH_CLIENT_ID 환경변수가 설정되지 않았습니다.'
      ) : (
        <>
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin onSuccess={handleLogin} onError={handleError} />
          </GoogleOAuthProvider>
        </>
      )}
    </>
  );
}
