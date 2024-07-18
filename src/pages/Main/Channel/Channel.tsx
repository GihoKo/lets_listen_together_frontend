// import { useState } from 'react';
import styled from 'styled-components';
import MusicPlayer from './_components/MusicPlayer';
import MusicList from './_components/MusicList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Music } from './_types/interface';
import useMusicStore from '../../../store/useMusicStore';
import useGetMusicsByChannelId from '../../../apis/hooks/useGetMusicsByChannelId';
import PersonalTap from './_components/PersonalTap';

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
  const [currentTapValue, setcurrentTapValue] = useState<number>(0);

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
      <PersonalTap currentTapValue={currentTapValue} setcurrentTapValue={setcurrentTapValue} />
      <Content>
        <MusicPlayer currentMusic={currentMusic} playNextMusic={playNextMusic} playPrevMusic={playPrevMusic} />
        <MusicList musicList={musicList} />
      </Content>
    </>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 32px;
  justify-items: center;

  padding: 0 32px;

  @media (max-width: 768px) {
    width: 200vw;

    gap: 0;
    padding: 0 0 52px 0;

    overflow-x: hidden;
  }
`;
