// libraries
import styled from 'styled-components';

// components
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <BackGround>
      페이지를 찾을 수 없습니다.
      <GoToHomeLink to='/main'>메인으로 돌아가기</GoToHomeLink>
    </BackGround>
  );
}

const BackGround = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--grey-grey100);
  font-size: 24px;
  font-weight: bold;
  color: var(--grey-grey900);
`;

const GoToHomeLink = styled(Link)`
  border: 1px solid var(--mint5);
  border-radius: 16px;

  background-color: var(--mint4);
  color: var(--grey-grey100);
  font-size: 20px;
  padding: 10px 20px;

  margin-top: 20px;

  cursor: pointer;

  &:hover {
    background-color: var(--mint5);
  }
`;
