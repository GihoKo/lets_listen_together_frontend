import { useQuery } from '@tanstack/react-query';
import { getMyOwnChannels } from '../service/user';
import { Channel } from '../../src/types/channel';
import { UserId } from '../../src/types/user';

export default function useGetMyOwnChannels(userId: UserId | undefined) {
  const queryKey = ['myOwnChannels', 'myChannels'];
  return useQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getMyOwnChannels(userId),
  });
}
