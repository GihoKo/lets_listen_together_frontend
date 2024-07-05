// import { useState } from 'react';
import styled from 'styled-components';
import MusicPlayer from './_components/MusicPlayer';
import MusicList from './_components/MusicList';
import { useParams } from 'react-router-dom';
import CreateMusicModal from '../../../components/Organisms/Modal/CreateMusicModal';
import useModalStore from '../../../../store/useModalStore';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Music } from './_types/interface';
import useMusicStore from '../../../../store/useMusicStore';

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

  const getMusicList = async () => {
    try {
      await axios.get(`http://localhost:8080/api/channels/${channelId}/musics`).then((response) => {
        setMusicList(response.data);
        setMusic(response.data[0]);
      });
    } catch (e) {
      console.error(e);
    }
  };

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
    resetMusic();
    setMusic(musicList[currentMusicIndex - 1]);
  };

  useEffect(() => {
    getMusicList();

    return () => {
      resetMusic();
    };
  }, [channelId]);

  return (
    <>
      {isOpen ? <CreateMusicModal channelId={channelId} /> : null}
      <Wrapper>
        <MusicPlayer currentMusic={currentMusic} playNextMusic={playNextMusic} playPrevMusic={playPrevMusic} />
        <MusicList data={musicList} />
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
