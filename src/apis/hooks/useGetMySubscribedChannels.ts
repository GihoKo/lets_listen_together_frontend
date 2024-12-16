import { useSuspenseQuery } from '@tanstack/react-query';
import { getMySubscribedChannels } from '../services/user';
import { Channel } from '../../types/channel';
import queryKeys from '../queryKey';
import apiCallCounter from '@/testUtils/ApiCallCounter';

export default function useGetMySubscribedChannels(userId: string | undefined) {
  const queryKey = queryKeys.channels.mySubscribedChannels(userId);

  apiCallCounter.increment();
  console.log('구독 채널 조회', apiCallCounter.getCount());

  return useSuspenseQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getMySubscribedChannels(userId),
    staleTime: 1 * 60 * 1000, // 1분
    gcTime: 5 * 60 * 1000, // 5분
  });
}
