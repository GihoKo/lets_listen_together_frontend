// libraries
import styled from 'styled-components';

// hooks
import useGoogleLoginButton from './GoogleLoginButton.hook';

// images
import googleLogoSvg from '../../../../src/images/svg/google-logo.svg';

export default function GoogleLoginButton() {
  // logics
  const { login } = useGoogleLoginButton();

  // view
  return (
    <Wrapper onClick={login}>
      <Logo>
        <img src={googleLogoSvg} alt='구글 로그인 버튼 이미지' />
      </Logo>
      <Text>Google로 시작하기</Text>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 2px solid var(--mint6);
  border-radius: 8px;
  width: 100%;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  background-color: var(--grey-grey990);

  cursor: pointer;
`;

const Logo = styled.div`
  width: 24px;
  height: 24px;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--grey-grey50);

  cursor: pointer;
`;
