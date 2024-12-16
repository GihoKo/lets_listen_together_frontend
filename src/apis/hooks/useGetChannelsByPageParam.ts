import { useInfiniteQuery, UseInfiniteQueryResult } from '@tanstack/react-query';
import { getChannelsByPageParam } from '../services/channel';
import queryKeys from '../queryKey';
import { Channel } from '@/types/channel';
import apiCallCounter from '@/testUtils/ApiCallCounter';

interface UseGetChannelByPageParamResponse {
  pageParams: number[];
  pages: {
    channels: Channel[];
    nextCursor: number | null;
  }[];
}

export default function useGetChannelByPageParam(): UseInfiniteQueryResult<UseGetChannelByPageParamResponse, Error> {
  const queryKey = queryKeys.channels.allChannels;

  apiCallCounter.increment();
  console.log('메인 페이지 채널 조회', apiCallCounter.getCount());

  return useInfiniteQuery({
    queryKey: queryKey,
    queryFn: getChannelsByPageParam, // pageParam을 올바르게 사용
    staleTime: 1 * 60 * 1000, // 1분
    gcTime: 60 * 60 * 1000, // 60분
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage?.nextCursor !== null ? lastPage.nextCursor : undefined; // nextCursor가 null인 경우 undefined 반환
    },
  });
}
