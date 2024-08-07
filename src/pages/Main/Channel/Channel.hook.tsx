// hooks
import useGetMusicsByChannelId from '@/apis/hooks/useGetMusicsByChannelId';
import useMusicStore from '@/store/useMusicStore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// types
import { Music } from '@/types/music';
import useChannelIdStore from '@/store/useChannelIdStore';

export default function useChannel() {
  const { channelId } = useParams<{ channelId: string }>();
  const { setChannelId } = useChannelIdStore();
  const [musicList, setMusicList] = useState<Music[]>([]);
  const { music: currentMusic, setMusic, resetMusic } = useMusicStore();
  const { data: musicListData, isLoading, isError, refetch } = useGetMusicsByChannelId(channelId);
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
    if (channelId) {
      refetch();
    }
  }, [refetch, channelId]);

  useEffect(() => {
    if (musicListData) {
      setMusicList(musicListData);
      setChannelId(channelId);
    }
  }, [musicListData]);

  return {
    musicList,
    setMusicList,
    currentMusic,
    isLoading,
    isError,
    playNextMusic,
    playPrevMusic,
    personalTap,
    currentTapValue,
    handleTapChange,
  };
}
