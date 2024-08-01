import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMusic } from '../services/music';
import queryKeys from '../queryKey';

export default function useDeleteMusic() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: (musicId) => deleteMusic(musicId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.musicList.allMusicList,
      });
    },
  });
}
