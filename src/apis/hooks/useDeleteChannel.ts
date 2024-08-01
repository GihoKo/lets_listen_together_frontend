import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteChannel } from '../services/channel';
import queryKeys from '../queryKey';

interface updateMusicParams {
  channelId: string;
}

export default function useDeleteChannel() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, updateMusicParams>({
    mutationFn: ({ channelId }) => deleteChannel(channelId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.channels.allChannels,
      });
    },
  });
}
