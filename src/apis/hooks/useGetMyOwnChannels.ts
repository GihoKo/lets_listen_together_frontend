import { useSuspenseQuery } from '@tanstack/react-query';
import { getMyOwnChannels } from '../services/user';
import { Channel } from '../../types/channel';
import queryKeys from '../queryKey';

export default function useGetMyOwnChannels(userId: string | undefined) {
  const queryKey = queryKeys.channels.myOwnChannels(userId);

  return useSuspenseQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getMyOwnChannels(userId),
  });
}
