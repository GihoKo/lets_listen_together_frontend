import { useMutation, useQueryClient } from '@tanstack/react-query';
import { unsubscribeChannel } from '../services/channel';

interface unsubscribeChannelParams {
  channelId: string;
  userId: string | undefined;
}

export default function useUnsubscribeChannel() {
  const queryClient = useQueryClient();

  const { mutate, status, isPending, isError } = useMutation<void, Error, unsubscribeChannelParams>({
    mutationFn: ({ channelId, userId }) => unsubscribeChannel(channelId, userId),
    onSuccess: (_data, { channelId, userId }) => {
      queryClient.invalidateQueries({
        queryKey: ['channels', 'channel', channelId],
      });

      queryClient.invalidateQueries({
        queryKey: ['channels', 'myChannels', userId, 'mySubscribedChannels'],
      });
    },
  });

  return { mutate, status, isPending, isError };
}
