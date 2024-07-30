import { useUserStore } from '@/store/useUserStore';

interface CheckChannelOwnerProps {
  ownerId: string | undefined;
}

export const checkIsChannelOwner = ({ ownerId }: CheckChannelOwnerProps) => {
  const { user } = useUserStore.getState();
  const userId = user?.id;
  const isChannelOwner = userId === ownerId;
  return isChannelOwner;
};
