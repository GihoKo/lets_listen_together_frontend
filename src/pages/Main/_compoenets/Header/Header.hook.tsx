// hooks
import { useUserStore } from '@/store/useUserStore';

export default function useHeader() {
  const { user } = useUserStore();
  const profileImage = user?.profileImage;

  return { profileImage };
}
