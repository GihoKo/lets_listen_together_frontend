import useGetAllChannels from '@/apis/hooks/useGetAllChannels';

export default function useChannelContainer() {
  const { data: channels, isLoading, isError } = useGetAllChannels();

  return {
    channels,
    isLoading,
    isError,
  };
}
