// hooks
import { useEffect, useState } from 'react';
import useGetChannelById from '@/apis/hooks/useGetChannelById';
import useModalStore from '@/store/useModalStore';
import { useUserStore } from '@/store/useUserStore';

// components
import SubscribeChannelModal from '@/components/Organisms/Modal/SubscribeChannelModal';
import UnSubscribeChannelModal from '@/components/Organisms/Modal/UnSubscribeChannelModal';

// types
import { ModalType } from '@/types/enum';
import { UseSubscribeButtonProps } from './SubscribeButton.type';

export default function useSubscribeButton({ channelId }: UseSubscribeButtonProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { openModal } = useModalStore();
  const { data: channel, isLoading: isChannelLoading, isError: isChannelError } = useGetChannelById(channelId);
  const { user } = useUserStore.getState();
  const userId = user?.id;

  const handleSubscribeButtonClick = () => {
    openModal(ModalType.SUBSCRBE_CHANNEL, <SubscribeChannelModal />, { channelId });
  };

  const handleUnsubscribeButtonClick = () => {
    openModal(ModalType.UNSUBSCRIBE_CHANNEL, <UnSubscribeChannelModal />, { channelId });
  };

  const checkIsSubscribed = () => {
    if (channel?.users.some((user) => user.id === userId)) {
      setIsSubscribed(true);
    } else {
      setIsSubscribed(false);
    }
  };

  useEffect(() => {
    checkIsSubscribed();
  }, [isSubscribed, channel]);

  return { isSubscribed, isChannelLoading, isChannelError, handleSubscribeButtonClick, handleUnsubscribeButtonClick };
}
