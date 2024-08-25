// libraries
import styled from 'styled-components';

// hooks
import useSignInPage from './SignInPage.hook';

// components
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginButton from './_components/GoogleLoginButton';

export default function SignInPage() {
  // logics
  const { CLIENT_ID } = useSignInPage();

  // view
  if (!CLIENT_ID) {
    return <NotFoundClientId>client id가 존재하지 않습니다</NotFoundClientId>;
  }

  return (
    <BackGround>
      <Container>
        <Header>간단하게 로그인 또는 회원가입하세요</Header>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <GoogleLoginButton />
        </GoogleOAuthProvider>
      </Container>
    </BackGround>
  );
}

const NotFoundClientId = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--grey-grey900);
`;

const BackGround = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-grey100);
`;

const Header = styled.header`
  font-size: 16px;
  color: var(--grey-grey900);

  margin-bottom: 24px;
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
