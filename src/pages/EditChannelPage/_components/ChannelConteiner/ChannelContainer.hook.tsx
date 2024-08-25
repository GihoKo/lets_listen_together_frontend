// apis
import useGetMyOwnChannels from '@/apis/hooks/useGetMyOwnChannels';

// store
import { useUserStore } from '@/store/useUserStore';

export default function useChannelContainer() {
  const { user } = useUserStore();
  const userId = user?.id;

  const { data: channels } = useGetMyOwnChannels(userId);

  return {
    channels,
  };
}
