import { useQuery } from '@tanstack/react-query';
import { User } from '../../types/user';
import { getMyUser } from '../services/user';

export default function useGetMyUser(userId: string) {
  const queryKey = ['user'];

  return useQuery<User, Error>({
    queryKey: queryKey,
    queryFn: () => getMyUser(userId),
  });
}
