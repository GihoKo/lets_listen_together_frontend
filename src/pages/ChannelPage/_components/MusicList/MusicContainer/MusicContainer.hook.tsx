// hooks
import useGetMusicsByChannelId from '@/apis/hooks/useGetMusicsByChannelId';
import useMusicListStore from '@/store/useMusicListStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function useMusicContainer() {
  const { channelId } = useParams<{ channelId: string }>();
  const { musicList, setMusicList } = useMusicListStore();
  const { data: fetchedMusicList, refetch } = useGetMusicsByChannelId(channelId);

  useEffect(() => {
    if (channelId) {
      refetch();
    }
  }, [refetch, channelId]);

  useEffect(() => {
    if (fetchedMusicList) {
      setMusicList(() => [...fetchedMusicList]);
    }
  }, [fetchedMusicList]);

  return { musicList };
}
