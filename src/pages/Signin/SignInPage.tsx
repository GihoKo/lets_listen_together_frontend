import styled from 'styled-components';
import GoogleLoginButton from './_components/GoogleLoginButton';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function SignInPage() {
  const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;

  if (!CLIENT_ID) return <NotFoundClientId>client id가 존재하지 않습니다</NotFoundClientId>;
  return (
    <Wrapper>
      <Container>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <GoogleLoginButton />
        </GoogleOAuthProvider>
      </Container>
    </Wrapper>
  );
}

const NotFoundClientId = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--grey-grey100);
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-grey100);
`;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 40px;
  background-color: var(--grey-grey150);
`;
