import { useQuery } from '@tanstack/react-query';
import { getMyChannelList } from '../services/user';
import { Channel } from '../../types/channel';

export default function useGetMyChannel(userId: string | undefined) {
  const queryKey = ['myChannels'];
  return useQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getMyChannelList(userId),
  });
}
