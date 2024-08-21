// hooks
import { useEffect, useState } from 'react';
import useGetChannelById from '@/apis/hooks/useGetChannelById';
import useModalStore from '@/store/useModalStore';
import { useUserStore } from '@/store/useUserStore';

// components
import SubscribeChannelModal from '@/components/Organisms/Modal/SubscribeChannelModal/SubscribeChannelModal';
import UnSubscribeChannelModal from '@/components/Organisms/Modal/UnsubscribeChannelModal/UnsubscribeChannelModal';

// types
import { ModalType } from '@/types/enum';
import { UseSubscribeButtonProps } from './SubscribeButton.type';

export default function useSubscribeButton({ channelId }: UseSubscribeButtonProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { openModal } = useModalStore();
  const { data: channel, isLoading: isChannelLoading, isError: isChannelError } = useGetChannelById(channelId);
  const { user } = useUserStore.getState();
  const userId = user?.id;
  const [isOwnChannel, setIsOwnChannel] = useState(false);

  const handleSubscribeButtonClick = () => {
    openModal(ModalType.SUBSCRBE_CHANNEL, <SubscribeChannelModal />, { channelId });
  };

  const handleUnsubscribeButtonClick = () => {
    openModal(ModalType.UNSUBSCRIBE_CHANNEL, <UnSubscribeChannelModal />, { channelId });
  };

  const checkIsSubscribed = () => {
    if (channel?.users.some((user) => user.id === userId)) {
      setIsSubscribed(true);
      return true;
    }
    setIsSubscribed(false);
    return false;
  };

  const checkIsOwnChannel = () => {
    if (channel?.ownerId === userId) {
      setIsOwnChannel(true);
      return true;
    }
    setIsOwnChannel(false);
    return false;
  };

  useEffect(() => {
    if (checkIsOwnChannel()) {
      return;
    }

    if (checkIsSubscribed()) {
      return;
    }
  }, [isSubscribed, channel]);

  return {
    isOwnChannel,
    isSubscribed,
    isChannelLoading,
    isChannelError,
    handleSubscribeButtonClick,
    handleUnsubscribeButtonClick,
  };
}
