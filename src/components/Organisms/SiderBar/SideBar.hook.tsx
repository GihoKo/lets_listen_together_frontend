// hooks
import { useState } from 'react';
import useModalStore from '../../../store/useModalStore';

// types
import { ModalType } from '../../../types/enum';

// components
import CreateChannelModal from '../Modal/CreateChannelModal';

export default function useSideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const { openModal, isOpen: isModalOpen } = useModalStore();

  const handleSideBarToggleButtonClick = () => {
    setIsOpen(!isOpen);
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
