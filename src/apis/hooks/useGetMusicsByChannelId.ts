import { useQuery } from '@tanstack/react-query';
import { Music } from '../../types/music';
import { getMusicsByChannelId } from '../services/channel';

export default function useGetMusicsByChannelId(channelId: string | undefined) {
  const queryKey = ['musicList'];

  return useQuery<Music[], Error>({
    queryKey: queryKey,
    queryFn: () => getMusicsByChannelId(channelId),
  });
}
