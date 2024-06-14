import styled from 'styled-components';
import Router from './router';
import GlobalStyles from '../styles/GlobalStyles';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Router />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
`;
