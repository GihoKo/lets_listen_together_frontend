import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createMusic } from '../services/music';
import { MusicRequestData } from '../../pages/Main/Channel/_types/interface';

interface createMusicParams {
  music: MusicRequestData;
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
