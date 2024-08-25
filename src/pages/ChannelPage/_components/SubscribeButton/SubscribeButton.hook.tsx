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
  const { user } = useUserStore();
  const userId = user?.id;
  const { openModal } = useModalStore();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isOwnChannel, setIsOwnChannel] = useState(false);
  const { data: channel } = useGetChannelById(channelId);

  const handleSubscribeButtonClick = ({ actionType }: { actionType: 'subscribe' | 'unsubscribe' }) => {
    if (actionType === 'subscribe') {
      openModal(ModalType.SUBSCRBE_CHANNEL, <SubscribeChannelModal />, { channelId });
    }

    if (actionType === 'unsubscribe') {
      openModal(ModalType.UNSUBSCRIBE_CHANNEL, <UnSubscribeChannelModal />, { channelId });
    }
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
    handleSubscribeButtonClick,
  };
}
