import { useEffect, useState } from 'react';
import { Channel } from '../../types/interface';
import useGetAllChannel from '../../../../apis/hooks/useGetMyChannel';

export default function useChannelContainer() {
  const [channelList, setChannelList] = useState<Channel[]>([]);

  const { data, error, isLoading } = useGetAllChannel();

  useEffect(() => {
    if (data) {
      setChannelList(data);
    }
  }, [data]);

  return {
    channelList,
    error,
    isLoading,
  };
}
