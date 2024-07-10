import { useQuery } from '@tanstack/react-query';
import { getMyUser } from '../service/user';
import { User } from '../../src/types/user';

export default function useGetMyUser(userId: string) {
  const queryKey = ['user'];
  return useQuery<User, Error>({
    queryKey: queryKey,
    queryFn: () => getMyUser(userId),
  });
}
