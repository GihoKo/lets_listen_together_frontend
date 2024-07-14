import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMusic } from '../services/music';

export default function useDeleteMusic() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: (musicId) => deleteMusic(musicId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['musicList'],
      });
    },
  });
}
