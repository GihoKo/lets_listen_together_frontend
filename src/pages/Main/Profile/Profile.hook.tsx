// hooks
import { useUserStore } from '@/store/useUserStore';

export default function useProfile() {
  const { user } = useUserStore();

  return {
    user,
  };
}
