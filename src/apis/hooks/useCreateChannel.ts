import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createChannel } from '../services/channel';

interface createMusicParams {
  channel: FormData;
}

export default function useCreateChannel() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, createMusicParams>({
    mutationFn: ({ channel }) => createChannel(channel),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['channels'],
      });
    },
  });
}
