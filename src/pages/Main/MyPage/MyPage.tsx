import styled from 'styled-components';

export default function MyPage() {
  return (
    <Wrapper>
      <Title>MyPage</Title>
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

const Title = styled.h1`
  border-bottom: 2px solid var(--grey-grey300);

  font-size: 56px;
  font-weight: bold;
  padding-bottom: 24px;
`;
