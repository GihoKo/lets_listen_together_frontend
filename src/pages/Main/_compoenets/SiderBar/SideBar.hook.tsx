// hooks
import useModalStore from '@/store/useModalStore';

// types
import { ModalType } from '@/types/enum';

// components
import CreateChannelModal from '@/components/Organisms/Modal/CreateChannelModal';
import useSideBarStore from '@/store/useSideBarStore';

export default function useSideBar() {
  const { isOpen, toggle } = useSideBarStore();
  const { openModal, isOpen: isModalOpen } = useModalStore();

  const handleSideBarToggleButtonClick = () => {
    toggle();
  };

  const handleCreateChannelModalOpenButtonClick = () => {
    openModal(ModalType.CREATE_CHANNEL, <CreateChannelModal />);
  };

  return {
    isOpen,
    handleSideBarToggleButtonClick,
    isModalOpen,
    handleCreateChannelModalOpenButtonClick,
  };
}
