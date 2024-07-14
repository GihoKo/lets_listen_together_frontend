// hooks
import { useState } from 'react';
import useGetMyOwnChannels from '@/apis/hooks/useGetMyOwnChannels';
import { useUserStore } from '@/store/useUserStore';

// types
import { Channel } from '@/types/channel';

export default function useMyOwnChannels() {
  const { user } = useUserStore();

  const [EdittedChannel, setEdittedChannel] = useState<Channel | null>(null);
  const { data: channels, isLoading, isError } = useGetMyOwnChannels(user?.id as string);

  const handleEditButtonClick = (channel: Channel) => {
    setEdittedChannel(channel);
  };
  return { EdittedChannel, setEdittedChannel, channels, isLoading, isError, handleEditButtonClick };
}
