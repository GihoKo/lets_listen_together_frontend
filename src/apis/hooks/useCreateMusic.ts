import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createMusic } from '../services/music';
import { Music } from '@/types/music';

interface createMusicParams {
  music: Music;
}

export default function useCreateMusic() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, createMusicParams>({
    mutationFn: ({ music }) => createMusic(music),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['musicList'],
      });
    },
  });
}
