import styled from 'styled-components';
import logo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    navigate('/signin');
  };

  return (
    <Wrapper>
      <Box>
        <Logo>
          <img src={logo} alt='로고 이미지' />
        </Logo>
        <StartButton onClick={handleStartButtonClick}>{`Let's start!`}</StartButton>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-grey100);
`;

const Box = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 40px;
  background-color: var(--grey-grey150);
`;

const Logo = styled.div`
  width: 160px;
  height: 160px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const StartButton = styled.button`
  border: 3px solid var(--mint8);
  border-radius: 16px;

  padding: 8px 16px;
  background-color: var(--mint4);
  color: var(--mint8);
  font-weight: 700;
  font-size: 16px;

  cursor: pointer;

  margin-top: 24px;

  &:hover {
    background-color: var(--mint5);
  }
`;
