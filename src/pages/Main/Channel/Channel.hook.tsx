// hooks
import useGetMusicsByChannelId from '@/apis/hooks/useGetMusicsByChannelId';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// types
import useChannelIdStore from '@/store/useChannelIdStore';
import useMusicListStore from '@/store/useMusicListStore';

export default function useChannel() {
  // need variables
  const { channelId } = useParams<{ channelId: string }>();
  const { setChannelId } = useChannelIdStore();

  // music
  const { musicList, setMusicList } = useMusicListStore();
  const { data: musicListData, isLoading, isError, refetch } = useGetMusicsByChannelId(channelId);

  // Tap
  const [currentTapValue, setcurrentTapValue] = useState<number>(1);
  const [personalTap, setPersonalTap] = useState([
    { name: 'Player', value: 0, isFocused: false },
    { name: 'List', value: 1, isFocused: true },
  ]);

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
      setMusicList(() => [...musicListData]);
      setChannelId(channelId);
    }
  }, [musicListData]);

  return {
    musicList,
    setMusicList,
    isLoading,
    isError,
    personalTap,
    currentTapValue,
    handleTapChange,
  };
}
