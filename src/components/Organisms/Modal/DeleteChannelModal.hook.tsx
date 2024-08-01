// hooks
import useDeleteChannel from '@/apis/hooks/useDeleteChannel';
import useModalStore from '@/store/useModalStore';

// types
import { ModalType } from '@/types/enum';
import { checkIsChannelOwner } from '@/utils/checkIsChannelOwner';
import { useState } from 'react';

export default function useDeleteChannelModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.DELETE_CHANNEL) return null;

  const modalProps = props as { channelId: string; channelName: string; channelOwnerId: string };
  const upLoadDeleteChannelMutation = useDeleteChannel();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      checkIsChannelOwner({
        ownerId: modalProps.channelOwnerId,
      })
    ) {
      upLoadDeleteChannelMutation.mutate({ channelId: modalProps.channelId });
      closeModal();
    } else {
      setErrorMessage('채널 삭제 권한이 없습니다.');
    }
  };

  return {
    handleSubmit,
    closeModal,
    modalProps,
    errorMessage,
  };
}
