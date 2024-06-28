import { useApplicationAuthTokenStore } from '../store/useAuthStore';

const getAccessToken = () => {
  const { accessToken } = useApplicationAuthTokenStore.getState();
  return accessToken;
};

export default getAccessToken;
