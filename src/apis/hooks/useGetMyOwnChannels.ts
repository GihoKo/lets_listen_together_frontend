import { useQuery } from '@tanstack/react-query';
import { getMyOwnChannels } from '../services/user';
import { Channel } from '../../types/channel';

export default function useGetMyOwnChannels(userId: string | undefined) {
  const queryKey = ['channels', 'myChannels', userId, 'myOwnChannels'];

  return useQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getMyOwnChannels(userId),
  });
}
