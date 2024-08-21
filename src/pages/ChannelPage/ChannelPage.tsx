// libraries
import styled from 'styled-components';

// components
import MusicPlayer from './_components/MusicPlayer';
import MusicList from './_components/MusicList';

// hooks
import useChannelPage from './ChannelPage.hook';

export default function ChannelPage() {
  // logics

  const { personalTap, currentTapValue, handleTapChange } = useChannelPage();

  return (
    <>
      <Content $currentTapValue={currentTapValue}>
        <MusicPlayer />
        <MusicList />
      </Content>
      <TapContainer>
        {personalTap.map((tap) => (
          <TapButton
            key={tap.value}
            $currentTapValue={currentTapValue}
            $tapValue={tap.value}
            $isFocused={tap.isFocused}
            onClick={() => handleTapChange(tap.value)}
          >
            {tap.name}
          </TapButton>
        ))}
      </TapContainer>
    </>
  );
}

const Content = styled.div<{
  $currentTapValue: number;
}>`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 24px;

  justify-items: center;

  @media (max-width: 768px) {
    width: 200vw;

    gap: 0px;
    padding: 0 0 52px 0;

    transition: transform 0.3s;
    transform: ${({ $currentTapValue }) => `translateX(-${$currentTapValue * 100}vw)`};
  }
`;

const TapContainer = styled.div`
  border-top: 1px solid var(--grey-grey300);
  display: none;

  width: 100%;

  background-color: var(--grey-grey100);

  position: fixed;
  bottom: 0;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const TapButton = styled.button<{
  $currentTapValue: number;
  $tapValue: number;
  $isFocused: boolean;
}>`
  flex-grow: 1;

  font-size: 16px;
  padding: 16px 0;
  cursor: pointer;

  color: ${({ $isFocused }) => ($isFocused ? 'var(--mint9)' : 'var(--mint5)')};
  background-color: ${({ $isFocused }) => ($isFocused ? 'var(--mint5)' : 'var(--grey-grey100)')};
`;
