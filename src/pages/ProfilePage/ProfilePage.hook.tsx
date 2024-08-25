// hooks
import { useUserStore } from '@/store/useUserStore';

export default function useProfilePage() {
  const { user } = useUserStore();

  return {
    user,
  };
}
