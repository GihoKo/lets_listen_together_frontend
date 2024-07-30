import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMusic } from '../services/music';
import { Music } from '@/types/music';

interface updateMusicParams {
  musicId: string;
  music: Music;
}

export default function useUpdateMusic() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, updateMusicParams>({
    mutationFn: ({ musicId, music }) => updateMusic(musicId, music),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['musicList'],
      });
    },
  });
}
