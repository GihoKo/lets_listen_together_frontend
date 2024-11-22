import useGetChannelByPageParam from '@/apis/hooks/useGetChannelsByPageParam';
import useMusicStore from '@/store/useMusicStore';
import { useEffect, useRef } from 'react';

export default function useChannelContainer() {
  const { data: channels, hasNextPage, isFetchingNextPage, fetchNextPage } = useGetChannelByPageParam();
  const { music: currentMusic } = useMusicStore();
  const InfinifeScrollTriggerRef = useRef<HTMLDivElement | null>(null);

  const infiniteScroll = async () => {
    if (InfinifeScrollTriggerRef.current) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach(async (entry) => {
            if (entry.isIntersecting && InfinifeScrollTriggerRef.current && hasNextPage && !isFetchingNextPage) {
              fetchNextPage();
            }
          });
        },
        { threshold: 0.7 },
      );

      io.observe(InfinifeScrollTriggerRef.current);
    }
  };

  useEffect(() => {
    infiniteScroll();
  }, [hasNextPage]);

  return {
    channels,
    hasNextPage,
    currentMusic,
    InfinifeScrollTriggerRef,
  };
}
