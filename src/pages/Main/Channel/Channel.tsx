// import { useState } from 'react';
import styled from 'styled-components';
import MusicPlayer from './_components/MusicPlayer';
import MusicList from './_components/MusicList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Music } from './_types/interface';
import useMusicStore from '../../../store/useMusicStore';
import useGetMusicsByChannelId from '../../../apis/hooks/useGetMusicsByChannelId';

// type ChannelState = 'Personal' | 'Public' | 'Private';
// 개인 채널 -> 나 혼자만 음악 듣기
// 공개 채널 -> 같이 듣기
// 비공개 채널 -> 채널장의 허락을 받아야 입장 가능
// const [ChannelState] = useState<ChannelState>('Personal');

export default function Channel() {
  const { channelId } = useParams<{ channelId: string }>();
  const [musicList, setMusicList] = useState<Music[]>([]);
  const { music: currentMusic, setMusic, resetMusic } = useMusicStore();
  const { data, isLoading, isError } = useGetMusicsByChannelId(channelId);
  // 1. 플레이어, 플리 일렬로 나열
  // 2. 모바일 사이즈에서 플리가 없어지고 플레이어만 남음 -> tap의 값이 0
  // 3. 플리가 있을 때는 tap의 값이 1 -> 수를 이용해서 스와이프 방식으로 변경
  // 0: 플레이어, 1: 플레이리스트
  const [personalTap, setPersonalTap] = useState([
    { name: 'Player', value: 0, isFocused: false },
    { name: 'List', value: 1, isFocused: true },
  ]);
  const [currentTapValue, setcurrentTapValue] = useState<number>(1);

  const playNextMusic = () => {
    let currentMusicIndex = musicList.findIndex((music) => music.id === currentMusic?.id);
    if (currentMusicIndex === musicList.length - 1) {
      currentMusicIndex = -1;
    }
    setMusic(musicList[currentMusicIndex + 1]);
  };

  const playPrevMusic = () => {
    let currentMusicIndex = musicList.findIndex((music) => music.id === currentMusic?.id);
    if (currentMusicIndex === 0) {
      currentMusicIndex = musicList.length;
    }
    setMusic(musicList[currentMusicIndex - 1]);
  };

  const handleTapChange = (tap: number) => {
    setcurrentTapValue(tap);
    setPersonalTap(
      personalTap.map((item) => {
        if (item.value === tap) {
          return { ...item, isFocused: true };
        }
        return { ...item, isFocused: false };
      }),
    );
  };

  useEffect(() => {
    if (data) {
      setMusicList(data);
    }

    return () => {
      resetMusic();
    };
  }, [data, channelId]);

  if (isLoading) return <div>음악 리스트를 가져오고 있습니다...</div>;
  if (isError) return <div>음악 리스트를 가져오지 못했습니다...</div>;

  return (
    <>
      <Content $currentTapValue={currentTapValue}>
        <MusicPlayer currentMusic={currentMusic} playNextMusic={playNextMusic} playPrevMusic={playPrevMusic} />
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
