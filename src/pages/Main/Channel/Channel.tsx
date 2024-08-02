// libraries
import styled from 'styled-components';

// components
import MusicPlayer from './_components/MusicPlayer';
import MusicList from './_components/MusicList';

// hooks
import useChannel from './Channel.hook';
import { useEffect } from 'react';

export default function Channel() {
  // logics

  const {
    musicList,
    setMusicList,
    isLoading,
    isError,
    playNextMusic,
    playPrevMusic,
    personalTap,
    currentTapValue,
    handleTapChange,
  } = useChannel();

  // view
  if (isLoading) return <div>음악 리스트를 가져오고 있습니다...</div>;
  if (isError) return <div>음악 리스트를 가져오지 못했습니다...</div>;

  return (
    <>
      <Content $currentTapValue={currentTapValue}>
        <MusicPlayer playNextMusic={playNextMusic} playPrevMusic={playPrevMusic} />
        <MusicList musicList={musicList} setMusicList={setMusicList} />
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
