// libraries
import styled from 'styled-components';

// components
import Router from './router';

// styles
import GlobalStyles from './styles/GlobalStyles';

// stores
import useModalStore from './store/useModalStore';

// hooks
import { useEffect } from 'react';

// apis
import { renewTokens } from './apis/services/auth';

// token
import accessTokenManager from './authentication/accessTokenManager';

export default function App() {
  // 모달
  const { isOpen, component: ModalComponent } = useModalStore();

  // 새로고침 시 엑세스 토큰 재발급
  useEffect(() => {
    const isincludeMain = window.location.href.includes('main');
    const isHasAccessToken = accessTokenManager.hasAccessToken();

    if (!isHasAccessToken && isincludeMain) {
      renewTokens()
        .then((newAccessToken) => {
          if (newAccessToken) {
            accessTokenManager.setAccessToken(newAccessToken);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Router />
      </Wrapper>
      {isOpen ? ModalComponent : null}
    </>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
`;
