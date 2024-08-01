import styled from 'styled-components';
import Spinner from '../Atoms/Spinner/Spinner';

export default function Loading() {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;

  z-index: 9999;
`;
