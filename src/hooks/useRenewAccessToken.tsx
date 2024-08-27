// libraries
import { useEffect, useState } from 'react';

// apis
import { renewTokens } from '@/apis/services/auth';

// authentication
import accessTokenManager from '@/authentication/accessTokenManager';

export default function useRenewAccessToken() {
  const [isTokenReady, setIsTokenReady] = useState(false);

  useEffect(() => {
    const isincludeMain = window.location.href.includes('main');
    const isHasAccessToken = accessTokenManager.hasAccessToken();

    if (!isHasAccessToken && isincludeMain) {
      renewTokens()
        .then((newAccessToken) => {
          if (newAccessToken) {
            accessTokenManager.setAccessToken(newAccessToken);
            setIsTokenReady(true);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setIsTokenReady(true);
    }
  }, []);

  return { isTokenReady };
}
