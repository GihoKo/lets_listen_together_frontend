// hooks
import useUnsubscribeChannel from '@/apis/hooks/useUnSubscribeChannel';
import useModalStore from '@/store/useModalStore';
import { useUserStore } from '@/store/useUserStore';

// types
import { ModalType } from '@/types/enum';
import { UnSubscribeChannelModalProps } from './UnsubscribeChannelModal.type';
import { useEffect } from 'react';

export default function useUnsubscribeChannelModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.UNSUBSCRIBE_CHANNEL) return null;

  const modalProps = props as UnSubscribeChannelModalProps;
  const channelId = modalProps.channelId;
  const { user } = useUserStore.getState();
  const userId = user?.id;
  const { mutate, status, isPending, isError } = useUnsubscribeChannel();

  const handleUnSubscribeButtonClick = async () => {
    unSubscribeChannel();
    closeModal();
  };

  const unSubscribeChannel = async () => {
    mutate({ channelId, userId });
  };

  const handleModalCloseButtonClick = () => {
    closeModal();
  };

  useEffect(() => {
    console.log('status: ', status);
  }, [status]);

  return { isPending, isError, handleUnSubscribeButtonClick, handleModalCloseButtonClick };
}
