import { useQuery } from '@tanstack/react-query';
import { renewTokens } from '../services/auth';

interface AccessToken {
  accessToken: string;
}

export default function useRenewTokens() {
  const queryKey = ['tokens'];
  return useQuery<AccessToken, Error>({
    queryKey: queryKey,
    queryFn: renewTokens,
  });
}
