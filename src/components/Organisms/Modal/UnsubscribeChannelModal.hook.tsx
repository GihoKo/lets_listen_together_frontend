// hooks
import useUnsubscribeChannel from '@/apis/hooks/useUnSubscribeChannel';
import useModalStore from '@/store/useModalStore';
import { useUserStore } from '@/store/useUserStore';

// types
import { ModalType } from '@/types/enum';
import { UnSubscribeChannelModalProps } from './UnsubscribeChannelModal.type';

export default function useUnsubscribeChannelModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.UNSUBSCRIBE_CHANNEL) return null;

  const modalProps = props as UnSubscribeChannelModalProps;
  const channelId = modalProps.channelId;
  const { user } = useUserStore.getState();
  const userId = user?.id;
  const uploadUnSubcribeChannelMuatation = useUnsubscribeChannel();

  const handleUnSubscribeButtonClick = async () => {
    unSubscribeChannel();
    closeModal();
  };

  const unSubscribeChannel = async () => {
    uploadUnSubcribeChannelMuatation.mutate({ channelId, userId });
  };

  const handleModalCloseButtonClick = () => {
    closeModal();
  };

  return { handleUnSubscribeButtonClick, handleModalCloseButtonClick };
}
