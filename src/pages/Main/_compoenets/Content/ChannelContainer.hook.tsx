import useGetAllChannels from '@/apis/hooks/useGetAllChannels';
import useMusicStore from '@/store/useMusicStore';

export default function useChannelContainer() {
  const { data: channels, isLoading, isError } = useGetAllChannels();
  const { music: currentMusic } = useMusicStore();

  return {
    channels,
    isLoading,
    isError,
    currentMusic,
  };
}
