// hooks
import useModalStore from '@/store/useModalStore';
import useMusicStore from '@/store/useMusicStore';
import useSideBarStore from '@/store/useSideBarStore';

// types
import { ModalType } from '@/types/enum';

// components
import CreateChannelModal from '@/components/Organisms/Modal/CreateChannelModal/CreateChannelModal';

export default function useSideBar() {
  const { isOpen, toggle, close } = useSideBarStore();
  const { openModal } = useModalStore();
  const { music: currentMusic } = useMusicStore();

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
    currentMusic,
    handleToggle,
    handleCreateChannelModalOpenButtonClick,
    handleClose,
  };
}
