// import { useState } from 'react';
import styled from 'styled-components';
import MusicPlayer from './_components/MusicPlayer';
import MusicList from './_components/MusicList';
import { useParams } from 'react-router-dom';
import CreateMusicModal from '../../../components/Organisms/Modal/CreateMusicModal';
import { useEffect, useState } from 'react';
import { Music } from './_types/interface';
import useMusicStore from '../../../store/useMusicStore';
import useModalStore from '../../../store/useModalStore';
import useGetMusicsByChannelId from '../../../../apis/hooks/useGetMusicsByChannelId';

// type ChannelState = 'Personal' | 'Public' | 'Private';
// 개인 채널 -> 나 혼자만 음악 듣기
// 공개 채널 -> 같이 듣기
// 비공개 채널 -> 채널장의 허락을 받아야 입장 가능
// const [ChannelState] = useState<ChannelState>('Personal');

export default function Channel() {
  const { channelId } = useParams<{ channelId: string }>();
  const { isOpen } = useModalStore();

  const [musicList, setMusicList] = useState<Music[]>([]);
  const { music: currentMusic, setMusic, resetMusic } = useMusicStore();

  const { data, isLoading, isError } = useGetMusicsByChannelId(channelId);

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
      {isOpen ? <CreateMusicModal /> : null}
      <Wrapper>
        <MusicPlayer currentMusic={currentMusic} playNextMusic={playNextMusic} playPrevMusic={playPrevMusic} />
        <MusicList musicList={musicList} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 32px;
  justify-items: center;

  padding: 0 32px;
`;
