// hooks
import useGetMusicsByChannelId from '@/apis/hooks/useGetMusicsByChannelId';
import useMusicListStore from '@/store/useMusicListStore';
import apiCallCounter from '@/testUtils/ApiCallCounter';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function useMusicContainer() {
  const { channelId } = useParams<{ channelId: string }>();
  const { musicList, setMusicList } = useMusicListStore();
  const { data: fetchedMusicList, refetch } = useGetMusicsByChannelId(channelId);

  apiCallCounter.increment();

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
