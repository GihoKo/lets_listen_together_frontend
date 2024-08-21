import { useQuery } from '@tanstack/react-query';
import { Channel } from '../../types/channel';
import { getChannelById } from '../services/channel';
import queryKeys from '../queryKey';

export default function useGetChannelById(channelId: string | undefined) {
  const queryKey = queryKeys.channels.channel(channelId);

  return useQuery<Channel, Error>({
    queryKey: queryKey,
    queryFn: () => getChannelById(channelId),
    enabled: !!channelId,
  });
}
