import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateChannel } from '../services/channel';

interface updateChannelParams {
  channelId: string;
  channel: FormData;
}

export default function useUpdateChannel() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, updateChannelParams>({
    mutationFn: ({ channelId, channel }) => updateChannel(channelId, channel),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['channels'],
      });
    },
  });
}
