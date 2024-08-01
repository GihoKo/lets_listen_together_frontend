import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createMusic, CreateMusicData } from '../services/music';
import queryKeys from '../queryKey';

interface createMusicParams {
  music: CreateMusicData;
}

export default function useCreateMusic() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, createMusicParams>({
    mutationFn: ({ music }) => createMusic(music),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.musicList.allMusicList,
      });
    },
  });
}
