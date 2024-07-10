import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../service/user';
import { useUserStore } from '../../src/store/useUserStore';
import { User } from '../../src/types/user';

interface updateUserParams {
  userId: string | undefined;
  user: FormData;
}

export default function useUpdateUser() {
  const queryClient = useQueryClient();
  const { setUser } = useUserStore();

  return useMutation<User, Error, updateUserParams>({
    mutationFn: ({ userId, user }) => updateUser(userId, user),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
      setUser(data);
    },
  });
}
