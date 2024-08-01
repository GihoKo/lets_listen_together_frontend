import { useQuery } from '@tanstack/react-query';
import { getMySubscribedChannels } from '../services/user';
import { Channel } from '../../types/channel';

export default function useGetMySubscribedChannels(userId: string | undefined) {
  const queryKey = ['channels', 'myChannels', userId, 'mySubscribedChannels'];

  return useQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getMySubscribedChannels(userId),
  });
}
