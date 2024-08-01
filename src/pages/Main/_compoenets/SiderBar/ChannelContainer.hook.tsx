// hooks
import { useUserStore } from '@/store/useUserStore';
import { useParams } from 'react-router-dom';
import useGetMyOwnChannels from '@/apis/hooks/useGetMyOwnChannels';

export default function useChannelContainer() {
  const { user } = useUserStore();
  const userId = user?.id;
  const { channelId } = useParams();
  const { data: channelList, isError, isLoading } = useGetMyOwnChannels(userId);

  return {
    channelList,
    isError,
    isLoading,
    userId,
    channelId,
  };
}
