// hooks
import useModalStore from '@/store/useModalStore';

// components
import DeleteChannelModal from '@/components/Organisms/Modal/DeleteChannelModal';

// types
import { Channel } from '@/types/channel';
import { ModalType } from '@/types/enum';
import EditChannelModal from '@/components/Organisms/Modal/EditChannelModal';

interface ChannelItemProps {
  channel: Channel;
}

export default function useChannelItem({ channel }: ChannelItemProps) {
  const { openModal } = useModalStore();

  const handleDeleteModalButtonClick = () => {
    openModal(ModalType.DELETE_CHANNEL, <DeleteChannelModal />, { channelId: channel.id, channelName: channel.name });
  };

  const handleEditModalButtonClick = () => {
    openModal(ModalType.EDIT_CHANNEL, <EditChannelModal />, { channelId: channel.id, channelName: channel.name });
  };

  return { handleDeleteModalButtonClick, handleEditModalButtonClick };
}
