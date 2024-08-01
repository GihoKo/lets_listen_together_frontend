import { useQuery } from '@tanstack/react-query';
import { Channel } from '../../types/channel';
import { getChannelById } from '../services/channel';

export default function useGetChannelById(channelId: string | undefined) {
  const queryKey = ['channel', 'channels', channelId];
  return useQuery<Channel, Error>({
    queryKey: queryKey,
    queryFn: () => getChannelById(channelId),
  });
}
