import { useMutation, useQueryClient } from '@tanstack/react-query';
import { unsubscribeChannel } from '../services/channel';
import queryKeys from '../queryKey';

interface unsubscribeChannelParams {
  channelId: string;
  userId: string | undefined;
}

export default function useUnsubscribeChannel() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, unsubscribeChannelParams>({
    mutationFn: ({ channelId, userId }) => unsubscribeChannel(channelId, userId),
    onSuccess: (_data, { channelId, userId }) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.channels.channel(channelId),
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.channels.mySubscribedChannels(userId),
      });
    },
  });
}
