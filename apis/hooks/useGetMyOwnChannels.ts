import { useQuery } from '@tanstack/react-query';
import { getMyOwnChannels } from '../service/user';
import { Channel } from '../../src/types/channel';

export default function useGetMyOwnChannels(userId: string) {
  const queryKey = ['myOwnChannels', 'myChannels'];
  return useQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getMyOwnChannels(userId),
  });
}
