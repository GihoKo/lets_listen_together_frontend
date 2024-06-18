// import { useState } from 'react';
import styled from 'styled-components';
import MusicPlayer from './_components/MusicPlayer';
import MusicList from './_components/MusicList';
import Chatting from './_components/Chatting';
import { useParams } from 'react-router-dom';
import CreateMusicModal from '../../../components/Modal/CreateMusicModal';
import useModalStore from '../../../../store/useModalStore';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Music } from './_types/interface';

// type ChannelState = 'Personal' | 'Public' | 'Private';
// 개인 채널 -> 나 혼자만 음악 듣기
// 공개 채널 -> 같이 듣기
// 비공개 채널 -> 채널장의 허락을 받아야 입장 가능
// const [ChannelState] = useState<ChannelState>('Personal');

export default function Channel() {
  const { channelId } = useParams<{ channelId: string }>();
  const { isOpen } = useModalStore();

  const [musicList, setMusicList] = useState<Music[]>([]);
  const [currentMusic, setCurrentMusic] = useState<Music | null>(null);

  const getMusicList = async () => {
    try {
      await axios.get(`http://localhost:8080/api/channels/${channelId}/musics`).then((response) => {
        setMusicList(response.data);
        setCurrentMusic(response.data[0]);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const selectMusic = (music: Music) => {
    setCurrentMusic(music);
  };

  useEffect(() => {
    getMusicList();
  }, [channelId]);

  return (
    <>
      {isOpen ? <CreateMusicModal channelId={channelId} /> : null}
      <Wrapper>
        <MusicPlayer currentMusic={currentMusic} />
        <MusicList data={musicList} selectMusic={selectMusic} />
        <Chatting />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  justify-items: center;

  padding: 32px;
`;
