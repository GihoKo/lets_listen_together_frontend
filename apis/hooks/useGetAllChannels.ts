import { useQuery } from '@tanstack/react-query';
import { getAllchannelLists } from '../service/channel';
import { Channel } from '../../src/types/channel';

export default function useGetAllChannels() {
  const queryKey = ['channels'];
  return useQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getAllchannelLists(),
  });
}
