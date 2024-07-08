import { useGoogleLogin } from '@react-oauth/google';
import { axiosInstanceWithToken } from '../../../../apis/instances';
import { useApplicationAuthTokenStore, useGoogleOAuthTokenStore } from '../../../store/useAuthStore';
import { useUserStore } from '../../../store/useUserStore';
import { useNavigate } from 'react-router-dom';

import googleLogoSvg from '../../../../src/images/svg/google-logo.svg';
import styled from 'styled-components';

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
