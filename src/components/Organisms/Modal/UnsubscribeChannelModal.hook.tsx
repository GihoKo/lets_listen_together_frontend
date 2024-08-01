// hooks
import useUnsubscribeChannel from '@/apis/hooks/useUnSubscribeChannel';
import useModalStore from '@/store/useModalStore';
import { useUserStore } from '@/store/useUserStore';

// types
import { ModalType } from '@/types/enum';
import { UnSubscribeChannelModalProps } from './UnsubscribeChannelModal.type';
import { useState } from 'react';

export default function useUnsubscribeChannelModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.UNSUBSCRIBE_CHANNEL) return null;

  const modalProps = props as UnSubscribeChannelModalProps;
  const channelId = modalProps.channelId;
  const { user } = useUserStore.getState();
  const userId = user?.id;
  const upLoadUnSubscribeChannel = useUnsubscribeChannel();
  const [errorMessages, setErrorMessages] = useState<string | null>(null);

  const handleUnSubscribeButtonClick = () => {
    upLoadUnSubscribeChannel.mutate({ channelId, userId });

    if (upLoadUnSubscribeChannel.isError) {
      setErrorMessages('채널 구독 해제에 실패했습니다. 다시 시도해주세요.');
    }

    closeModal();
  };

  const handleModalCloseButtonClick = () => {
    closeModal();
  };

  return {
    isPending: upLoadUnSubscribeChannel.isPending,
    isError: upLoadUnSubscribeChannel.isError,
    errorMessages,
    handleUnSubscribeButtonClick,
    handleModalCloseButtonClick,
  };
}
