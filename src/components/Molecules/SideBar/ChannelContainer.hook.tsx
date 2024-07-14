// hooks
import { useUserStore } from '../../../store/useUserStore';
import { useParams } from 'react-router-dom';
import useGetAllChannels from '../../../apis/hooks/useGetAllChannels';

export default function useChannelContainer() {
  const { user } = useUserStore();
  const userId = user?.id;
  const { channelId } = useParams();

  const { data: channelList, isError, isLoading } = useGetAllChannels();

  return {
    channelList,
    isError,
    isLoading,
    userId,
    channelId,
  };
}
