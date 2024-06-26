import GoogleLoginButton from './_components/GoogleLoginButton';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function SignInPage() {
  const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;

  if (!CLIENT_ID) return <div>client id가 존재하지 않습니다</div>;
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <GoogleLoginButton />
    </GoogleOAuthProvider>
  );
}
