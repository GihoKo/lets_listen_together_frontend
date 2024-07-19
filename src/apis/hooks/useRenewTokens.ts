import { useQuery } from '@tanstack/react-query';
import { renewTokens } from '../services/auth';

interface ApplicationAccessToken {
  applicationAccessToken: string;
}

export default function useRenewTokens() {
  const queryKey = ['tokens'];
  return useQuery<ApplicationAccessToken, Error>({
    queryKey: queryKey,
    queryFn: renewTokens,
  });
}
