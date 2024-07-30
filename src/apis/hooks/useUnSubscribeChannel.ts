import { useMutation, useQueryClient } from '@tanstack/react-query';
import { unsubscribeChannel } from '../services/channel';

interface unsubscribeChannelParams {
  channelId: string;
  userId: string | undefined;
}

export default function useUnsubscribeChannel() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, unsubscribeChannelParams>({
    mutationFn: ({ channelId, userId }) => unsubscribeChannel(channelId, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['channel', 'channels'],
      });
    },
  });
}
