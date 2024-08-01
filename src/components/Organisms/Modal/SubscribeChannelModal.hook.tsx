/// hooks
import useModalStore from '@/store/useModalStore';
import { useUserStore } from '@/store/useUserStore';
import useSubscribeChannel from '@/apis/hooks/useSubscribeChannel';

// types
import { ModalType } from '@/types/enum';
import { SubscribeChannelModalProps } from './SubscribeChannelModal.type';
import { useState } from 'react';

export default function useSubscribeChannelModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.SUBSCRBE_CHANNEL) return null;

  const modalProps = props as SubscribeChannelModalProps;
  const channelId = modalProps.channelId;
  const { user } = useUserStore.getState();
  const userId = user?.id;
  const upLoadSubscribeChannel = useSubscribeChannel();
  const [errorMessages, setErrorMessages] = useState<string | null>(null);

  const handleSubscribeButtonClick = () => {
    upLoadSubscribeChannel.mutate({ channelId, userId });

    if (upLoadSubscribeChannel.isError) {
      setErrorMessages('채널 구독에 실패했습니다. 다시 시도해주세요.');
    }

    closeModal();
  };

  const handleModalCloseButtonClick = () => {
    closeModal();
  };

  return {
    isPending: upLoadSubscribeChannel.isPending,
    isError: upLoadSubscribeChannel.isError,
    errorMessages,
    handleSubscribeButtonClick,
    handleModalCloseButtonClick,
  };
}
