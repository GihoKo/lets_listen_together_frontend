// hooks
import useModalStore from '@/store/useModalStore';

// types
import { ModalType } from '@/types/enum';

// components
import CreateChannelModal from '@/components/Organisms/Modal/CreateChannelModal';
import useSideBarStore from '@/store/useSideBarStore';

export default function useSideBar() {
  const { isOpen, toggle, close } = useSideBarStore();
  const { openModal } = useModalStore();

  const handleToggle = () => {
    toggle();
  };

  const handleClose = () => {
    close();
  };

  const handleCreateChannelModalOpenButtonClick = () => {
    openModal(ModalType.CREATE_CHANNEL, <CreateChannelModal />);
  };

  return {
    isOpen,
    handleToggle,
    handleCreateChannelModalOpenButtonClick,
    handleClose,
  };
}
