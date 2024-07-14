// hooks
import useRenewTokens from '@/apis/hooks/useRenewTokens';
import { useApplicationAuthTokenStore } from '@/store/useAuthStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useMainPage() {
  const navigate = useNavigate();
  const { setAccessToken } = useApplicationAuthTokenStore();
  const { data, isLoading, isSuccess, isError } = useRenewTokens();

  useEffect(() => {
    if (isSuccess) {
      setAccessToken(data.accessToken);
    }
  }, [data]);

  return { isLoading, isError, navigate };
}
