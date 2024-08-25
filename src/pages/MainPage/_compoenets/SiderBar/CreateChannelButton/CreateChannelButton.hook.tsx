// componrnts
import CreateChannelModal from '@/components/Organisms/Modal/CreateChannelModal/CreateChannelModal';

// types
import { ModalType } from '@/types/enum';

// stores
import useModalStore from '@/store/useModalStore';

export default function useCreateChannelButton() {
  const { openModal } = useModalStore();

  const handleClick = () => {
    openModal(ModalType.CREATE_CHANNEL, <CreateChannelModal />);
  };

  return { handleClick };
}
