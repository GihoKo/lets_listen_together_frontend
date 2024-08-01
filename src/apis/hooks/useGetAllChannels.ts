import { useQuery } from '@tanstack/react-query';
import { getAllchannelLists } from '../services/channel';
import { Channel } from '../../types/channel';

export default function useGetAllChannels() {
  const queryKey = ['channels'];

  return useQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getAllchannelLists(),
  });
}
