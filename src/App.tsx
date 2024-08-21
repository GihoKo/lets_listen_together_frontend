// libraries
import styled from 'styled-components';

// components
import Router from './router';

// styles
import GlobalStyles from './styles/GlobalStyles';

// stores
import useModalStore from './store/useModalStore';

// hooks
import { useEffect, useState } from 'react';

// apis
import { renewTokens } from './apis/services/auth';

// token
import accessTokenManager from './authentication/accessTokenManager';

export default function App() {
  const { isOpen, component: ModalComponent } = useModalStore();

  const [isTokenReady, setIsTokenReady] = useState(false);

  useEffect(() => {
    const isincludeMain = window.location.href.includes('main');
    const isHasAccessToken = accessTokenManager.hasAccessToken();

    if (!isHasAccessToken && isincludeMain) {
      renewTokens()
        .then((newAccessToken) => {
          if (newAccessToken) {
            accessTokenManager.setAccessToken(newAccessToken);
            setIsTokenReady(true);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setIsTokenReady(true);
    }
  }, []);

  if (!isTokenReady) {
    return null;
  }

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
