import { useQuery } from '@tanstack/react-query';
import { Music } from '../../src/types/music';
import { getMusicsByChannelId } from '../service/channel';

export default function useGetMusicsByChannelId(channelId: string | undefined) {
  const queryKey = ['musicList', channelId];
  return useQuery<Music[], Error>({
    queryKey: queryKey,
    queryFn: () => getMusicsByChannelId(channelId),
  });
}
