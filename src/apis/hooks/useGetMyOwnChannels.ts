import { useSuspenseQuery } from '@tanstack/react-query';
import { getMyOwnChannels } from '../services/user';
import { Channel } from '../../types/channel';
import queryKeys from '../queryKey';
import apiCallCounter from '../../testUtils/ApiCallCounter';

export default function useGetMyOwnChannels(userId: string | undefined) {
  const queryKey = queryKeys.channels.myOwnChannels(userId);

  apiCallCounter.increment();
  console.log('나의 채널 조회', apiCallCounter.getCount());

  return useSuspenseQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getMyOwnChannels(userId),
    staleTime: 1 * 60 * 1000, // 1분
    gcTime: 5 * 60 * 1000, // 5분
  });
}
