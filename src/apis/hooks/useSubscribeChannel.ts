import { useMutation, useQueryClient } from '@tanstack/react-query';
import { subscribeChannel } from '../services/channel';

interface subscribeChannelParams {
  channelId: string;
  userId: string | undefined;
}

export default function useSubscribeChannel() {
  const queryClient = useQueryClient();

  const { mutate, status, isPending, isError } = useMutation<void, Error, subscribeChannelParams>({
    mutationFn: ({ channelId, userId }) => subscribeChannel(channelId, userId),
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
