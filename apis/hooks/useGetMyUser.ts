import { useQuery } from '@tanstack/react-query';
import { getMyUser } from '../service/user';
import { User, UserId } from '../../src/types/user';

export default function useGetMyUser(userId: UserId) {
  const queryKey = ['myUser'];
  return useQuery<User, Error>({
    queryKey: queryKey,
    queryFn: () => getMyUser(userId),
  });
}
