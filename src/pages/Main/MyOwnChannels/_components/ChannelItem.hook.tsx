// hooks
import useModalStore from '@/store/useModalStore';

// components
import DeleteChannelModal from '@/components/Organisms/Modal/DeleteChannelModal';

// types
import { Channel } from '@/types/channel';
import { ModalType } from '@/types/enum';

interface ChannelItemProps {
  channel: Channel;
  EdittedChannel: Channel | null;
}

export default function useChannelItem({ channel, EdittedChannel }: ChannelItemProps) {
  const { openModal } = useModalStore();

  const isEditted = channel.id === EdittedChannel?.id;

  const handleDeleteModalButtonClick = () => {
    openModal(ModalType.DELETE_CHANNEL, <DeleteChannelModal />, { channelId: channel.id, channelName: channel.name });
  };

  return { isEditted, handleDeleteModalButtonClick };
}
