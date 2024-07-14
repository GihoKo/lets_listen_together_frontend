// hooks
import useDeleteChannel from '@/apis/hooks/useDeleteChannel';
import useModalStore from '@/store/useModalStore';

// types
import { ModalType } from '@/types/enum';

export default function useDeleteChannelModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.DELETE_CHANNEL) return null;

  const modalProps = props as { channelId: string; channelName: string };
  const upLoadDeleteChannelMutation = useDeleteChannel();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    upLoadDeleteChannelMutation.mutate({ channelId: modalProps.channelId });
    closeModal();
  };

  return {
    handleSubmit,
    closeModal,
    modalProps,
  };
}
