import styled from 'styled-components';
import PageSpinner from '../Atoms/Spinner/PageSpinner';

export default function PageFallBack() {
  // view
  return (
    <Wrapper>
      <PageSpinner />
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
