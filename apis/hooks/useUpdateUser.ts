import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../service/user';
import { User } from '../../src/types/user';

interface updateUserParams {
  userId: string | undefined;
  user: User | null;
}

export default function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, updateUserParams>({
    mutationFn: ({ userId, user }) => updateUser(userId, user),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
  });
}
