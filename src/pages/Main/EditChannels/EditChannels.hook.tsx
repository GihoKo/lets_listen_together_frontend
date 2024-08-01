// hooks
import useGetMyOwnChannels from '@/apis/hooks/useGetMyOwnChannels';
import { useUserStore } from '@/store/useUserStore';

export default function useEditChannels() {
  const { user } = useUserStore();
  const userId = user?.id;

  const { data: channels, isLoading, isError } = useGetMyOwnChannels(userId);

  return { channels, isLoading, isError };
}
