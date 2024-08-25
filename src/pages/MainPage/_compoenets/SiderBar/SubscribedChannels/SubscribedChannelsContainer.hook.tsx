// hooks
import { useUserStore } from '@/store/useUserStore';
import { useParams } from 'react-router-dom';
import useGetMySubscribedChannels from '@/apis/hooks/useGetMySubscribedChannels';

export default function useSubscribedChannelsContainer() {
  const { user } = useUserStore();
  const userId = user?.id;
  const { channelId } = useParams();
  const { data: channelList } = useGetMySubscribedChannels(userId);

  return {
    channelList,
    userId,
    channelId,
  };
}
