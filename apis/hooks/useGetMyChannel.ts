import { useQuery } from '@tanstack/react-query';
import { getMyChannelList } from '../service/user';
import { Channel } from '../../src/types/channel';

export default function useGetMyChannel(userId: string | undefined) {
  const queryKey = ['myChannels'];
  return useQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getMyChannelList(userId),
  });
}
