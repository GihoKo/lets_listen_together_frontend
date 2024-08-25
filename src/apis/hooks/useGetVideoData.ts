import { useQuery } from '@tanstack/react-query';
import queryKeys from '../queryKey';
import { getVideoData } from '../services/youtube';
import { YouTubeVideo } from '@/types/youtube';

export default function useGetVideoData(musicUrl: string | undefined) {
  const queryKey = queryKeys.youtube.videoData(musicUrl);

  return useQuery<YouTubeVideo, Error>({
    queryKey: queryKey,
    queryFn: () => getVideoData(musicUrl),
    enabled: !!musicUrl,
  });
}
