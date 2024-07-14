import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMusic } from '../services/music';
import { MusicRequestData } from '../../pages/Main/Channel/_types/interface';

interface updateMusicParams {
  musicId: string;
  music: MusicRequestData;
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
