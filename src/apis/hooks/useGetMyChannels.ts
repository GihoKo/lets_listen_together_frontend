import { useQuery } from '@tanstack/react-query';
import { getMyChannelList } from '../services/user';
import { Channel } from '../../types/channel';
import queryKeys from '../queryKey';

export default function useGetMyChannels(userId: string | undefined) {
  const queryKey = queryKeys.channels.myOwnChannels(userId);

  return useQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getMyChannelList(userId),
    enabled: !!userId,
  });
}
