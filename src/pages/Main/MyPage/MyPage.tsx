import styled from 'styled-components';
import MainTitle from '../../../components/Atoms/Text/MainTitle';

export default function MyPage() {
  return (
    <Wrapper>
      <MainTitle>MyPage</MainTitle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 0 32px;
`;
