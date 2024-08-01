import { useQuery } from '@tanstack/react-query';
import { Music } from '../../types/music';
import { getMusicsByChannelId } from '../services/channel';
import queryKeys from '../queryKey';

export default function useGetMusicsByChannelId(channelId: string | undefined) {
  const queryKey = queryKeys.musicList.allMusicList;

  return useQuery<Music[], Error>({
    queryKey: queryKey,
    queryFn: () => getMusicsByChannelId(channelId),
  });
}
