// libraries
import styled from 'styled-components';

// components
import StartButton from './_components/StartButton';
import Logo from './_components/Logo';

export default function LandingPage() {
  // view
  return (
    <BackGround>
      <Box>
        <Logo />
        <StartButton />
      </Box>
    </BackGround>
  );
}

const BackGround = styled.div`
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
