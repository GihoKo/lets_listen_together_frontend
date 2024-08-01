import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Music } from '@/types/music';
import { updateMusicListOrder } from '../services/channel';
import queryKeys from '../queryKey';

interface updateMusicOrderParams {
  musicList: Music[];
}

export default function useUpdateMusicOrder() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, updateMusicOrderParams>({
    mutationFn: ({ musicList }) => updateMusicListOrder(musicList),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.musicList.allMusicList,
      });
    },
  });
}
