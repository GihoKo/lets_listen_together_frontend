import styled from 'styled-components';

export default function Error() {
  return (
    <Wrapper>
      <ErrorMessgae>에러가 발생했습니다. 다시 요청해주세요.</ErrorMessgae>
    </Wrapper>
  );
}

const ErrorMessgae = styled.span`
  font-size: 24px;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
`;
