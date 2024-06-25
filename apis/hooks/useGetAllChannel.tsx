import { useQuery } from '@tanstack/react-query';
import { getChannelList } from '../service/channel';
import { Channel } from '../../src/components/types/interface';

export default function useGetAllChannel() {
  const queryKey = ['channels'];
  return useQuery<Channel[], Error>({
    queryKey: queryKey,
    queryFn: getChannelList,
  });
}
