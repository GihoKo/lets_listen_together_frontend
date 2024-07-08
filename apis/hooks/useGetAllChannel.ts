import { useQuery } from '@tanstack/react-query';
import { getMyChannelList } from '../service/user';
import { Channel } from '../../src/types/channel';
import { UserId } from '../../src/types/user';

export default function useGetMyChannel(userId: UserId | undefined) {
  const queryKey = ['myChannels'];
  return useQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getMyChannelList(userId),
  });
}
