import { useQuery } from '@tanstack/react-query';
import { getAllchannelLists } from '../services/channel';
import { Channel } from '../../types/channel';
import queryKeys from '../queryKey';

export default function useGetAllChannels() {
  const queryKey = queryKeys.channels.allChannels;

  return useQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: () => getAllchannelLists(),
  });
}
