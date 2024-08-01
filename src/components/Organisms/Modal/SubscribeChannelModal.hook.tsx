/// hooks
import useModalStore from '@/store/useModalStore';
import { useUserStore } from '@/store/useUserStore';
import useSubscribeChannel from '@/apis/hooks/useSubscribeChannel';

// types
import { ModalType } from '@/types/enum';
import { SubscribeChannelModalProps } from './SubscribeChannelModal.type';

export default function useSubscribeChannelModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.SUBSCRBE_CHANNEL) return null;

  const modalProps = props as SubscribeChannelModalProps;
  const channelId = modalProps.channelId;
  const { user } = useUserStore.getState();
  const userId = user?.id;
  const uploadSubcribeChannelMuatation = useSubscribeChannel();

  const handleSubscribeButtonClick = async () => {
    subscribeChannel();
    closeModal();
  };

  const subscribeChannel = async () => {
    uploadSubcribeChannelMuatation.mutate({ channelId, userId });
  };

  const handleModalCloseButtonClick = () => {
    closeModal();
  };

  return { handleSubscribeButtonClick, handleModalCloseButtonClick };
}
