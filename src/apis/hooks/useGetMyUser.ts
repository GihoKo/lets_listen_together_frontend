import { useQuery } from '@tanstack/react-query';
import { User } from '../../types/user';
import { getMyUser } from '../services/user';
import queryKeys from '../queryKey';

export default function useGetMyUser(userId: string) {
  const queryKey = queryKeys.user.myUser;

  return useQuery<User, Error>({
    queryKey: queryKey,
    queryFn: () => getMyUser(userId),
    gcTime: 0,
    enabled: !!userId,
  });
}
