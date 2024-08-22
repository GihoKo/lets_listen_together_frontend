import useGetMyOwnChannels from '@/apis/hooks/useGetMyOwnChannels';
import { useUserStore } from '@/store/useUserStore';
import { useParams } from 'react-router-dom';

export default function useMyChannelsContainer() {
  const { channelId } = useParams();
  const { user } = useUserStore();
  const userId = user?.id;
  const { data: channelList } = useGetMyOwnChannels(userId);

  return {
    channelList,
    channelId,
  };
}
