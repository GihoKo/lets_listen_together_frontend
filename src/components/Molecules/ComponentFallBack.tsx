import styled from 'styled-components';
import ComponentSpinner from '../Atoms/Spinner/ComponentSpinner';

export default function ComponentFallBack() {
  // view
  return (
    <Wrapper>
      <ComponentSpinner />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: 'transparent';
`;
