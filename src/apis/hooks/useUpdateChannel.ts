import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateChannel } from '../services/channel';
import queryKeys from '../queryKey';

interface updateChannelParams {
  channelId: string;
  channel: FormData;
}

export default function useUpdateChannel() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, updateChannelParams>({
    mutationFn: ({ channelId, channel }) => updateChannel(channelId, channel),
    onSuccess: (_data, { channelId }) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.channels.channel(channelId),
      });
    },
  });
}
