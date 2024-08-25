// hooks
import useModalStore from '@/store/useModalStore';

// components
import DeleteChannelModal from '@/components/Organisms/Modal/DeleteChannelModal/DeleteChannelModal';
import EditChannelModal from '@/components/Organisms/Modal/EditChannelModal/EditChannelModal';

// types
import { ModalType } from '@/types/enum';
import { useChannelProps } from './Channel.type';

export default function useChannel({ channel }: useChannelProps) {
  const { openModal } = useModalStore();

  const handleDeleteModalOpenButtonClick = () => {
    openModal(ModalType.DELETE_CHANNEL, <DeleteChannelModal />, {
      channelId: channel.id,
      channelName: channel.name,
      channelOwnerId: channel.ownerId,
    });
  };

  const handleEditModalOpenButtonClick = () => {
    openModal(ModalType.EDIT_CHANNEL, <EditChannelModal />, {
      channelId: channel.id,
      channelName: channel.name,
      channelOwnerId: channel.ownerId,
    });
  };

  return { handleDeleteModalOpenButtonClick, handleEditModalOpenButtonClick };
}
