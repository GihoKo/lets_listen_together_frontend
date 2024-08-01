import styled from 'styled-components';
import Spinner from '../Atoms/Spinner/Spinner';

export default function FallBack() {
  // view
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

  background-color: var(--grey-grey100);
`;
