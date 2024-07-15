import { useApplicationAuthTokenStore } from '../store/useAuthStore';

const getAccessToken = () => {
  const { accessToken } = useApplicationAuthTokenStore.getState();
  console.log(accessToken);
  return accessToken;
};

export default getAccessToken;
