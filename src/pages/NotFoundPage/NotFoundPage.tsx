import styled from 'styled-components';

export default function NotFoundPage() {
  return <BackGround>페이지를 찾을 수 없습니다.</BackGround>;
}

const BackGround = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  font-weight: bold;
  color: var(--grey-grey100);
`;
