import styled from 'styled-components';
import Router from './router';
import GlobalStyles from './styles/GlobalStyles';
import useModalStore from './store/useModalStore';

export default function App() {
  const { isOpen, component: ModalComponent } = useModalStore();

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
