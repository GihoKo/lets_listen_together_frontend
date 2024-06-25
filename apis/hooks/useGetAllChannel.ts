import { useQuery } from '@tanstack/react-query';
import { getMyChannelList } from '../service/channel';
import { Channel } from '../../src/components/types/interface';
import { UserId } from '../../src/store/useUserStore';

export default function useGetMyChannel(userId: UserId) {
  const queryKey = ['myChannels'];
  return useQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getMyChannelList(userId),
  });
}
