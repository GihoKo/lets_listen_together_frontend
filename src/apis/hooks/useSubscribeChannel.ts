import { useMutation, useQueryClient } from '@tanstack/react-query';
import { subscribeChannel } from '../services/channel';

interface subscribeChannelParams {
  channelId: string;
  userId: string | undefined;
}

export default function useSubscribeChannel() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, subscribeChannelParams>({
    mutationFn: ({ channelId, userId }) => subscribeChannel(channelId, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['channel', 'channels'],
      });
    },
  });
}
