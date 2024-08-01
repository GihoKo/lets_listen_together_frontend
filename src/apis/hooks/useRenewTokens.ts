import { useQuery } from '@tanstack/react-query';
import { renewTokens } from '../services/auth';
import queryKeys from '../queryKey';

interface ApplicationAccessToken {
  applicationAccessToken: string;
}

export default function useRenewTokens() {
  const queryKey = queryKeys.auth.tokens;

  return useQuery<ApplicationAccessToken, Error>({
    queryKey: queryKey,
    queryFn: renewTokens,
  });
}
