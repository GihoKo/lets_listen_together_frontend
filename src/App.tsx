// libraries
import styled from 'styled-components';

// components
import Router from './router';

// styles
import GlobalStyles from './styles/GlobalStyles';

// stores
import useModalStore from './store/useModalStore';

// token
import useRenewAccessToken from './hooks/useRenewAccessToken';

export default function App() {
  const { isOpen, component: ModalComponent } = useModalStore();

  const { isTokenReady } = useRenewAccessToken();

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
