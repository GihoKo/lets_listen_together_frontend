import useGetChannelByPageParam from '@/apis/hooks/useGetChannelsByPageParam';
import useMusicStore from '@/store/useMusicStore';

export default function useChannelContainer() {
  const { data: channels, fetchNextPage } = useGetChannelByPageParam();
  const { music: currentMusic } = useMusicStore();

  return {
    channels,
    fetchNextPage,
    currentMusic,
  };
}
