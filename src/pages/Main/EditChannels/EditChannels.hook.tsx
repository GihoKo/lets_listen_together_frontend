// hooks
import useGetMyOwnChannels from '@/apis/hooks/useGetMyOwnChannels';
import { useUserStore } from '@/store/useUserStore';

export default function useEditChannels() {
  const { user } = useUserStore();

  const { data: channels, isLoading, isError } = useGetMyOwnChannels(user?.id as string);

  return { channels, isLoading, isError };
}
