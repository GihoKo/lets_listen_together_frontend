import { useQuery } from '@tanstack/react-query';
import { getMyChannelList } from '../services/user';
import { Channel } from '../../types/channel';

export default function useGetMyChannels(userId: string | undefined) {
  const queryKey = ['channels', 'myChannels', userId];

  return useQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getMyChannelList(userId),
  });
}
