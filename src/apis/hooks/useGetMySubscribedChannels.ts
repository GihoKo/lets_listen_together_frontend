import { useSuspenseQuery } from '@tanstack/react-query';
import { getMySubscribedChannels } from '../services/user';
import { Channel } from '../../types/channel';
import queryKeys from '../queryKey';

export default function useGetMySubscribedChannels(userId: string | undefined) {
  const queryKey = queryKeys.channels.mySubscribedChannels(userId);

  return useSuspenseQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getMySubscribedChannels(userId),
    staleTime: 1 * 60 * 1000, // 1분
    gcTime: 5 * 60 * 1000, // 5분
  });
}
