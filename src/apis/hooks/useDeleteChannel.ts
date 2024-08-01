import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteChannel } from '../services/channel';

interface updateMusicParams {
  channelId: string;
}

export default function useDeleteChannel() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, updateMusicParams>({
    mutationFn: ({ channelId }) => deleteChannel(channelId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['myOwnChannels', 'channels'],
      });
    },
  });
}
