// hooks
import useModalStore from '@/store/useModalStore';

// types
import { ModalType } from '@/types/enum';

// components
import CreateChannelModal from '@/components/Organisms/Modal/CreateChannelModal/CreateChannelModal';
import useSideBarStore from '@/store/useSideBarStore';
import useGetMyOwnChannels from '@/apis/hooks/useGetMyOwnChannels';
import { useUserStore } from '@/store/useUserStore';
import useGetMySubscribedChannels from '@/apis/hooks/useGetMySubscribedChannels';

export default function useSideBar() {
  const { isOpen, toggle, close } = useSideBarStore();
  const { openModal } = useModalStore();
  const { user } = useUserStore.getState();
  const userId = user?.id;
  const { data: myChannels, isLoading: isLoadingMyChannels, isError: isErrorMyChannels } = useGetMyOwnChannels(userId);
  const {
    data: mySubscribedChannels,
    isLoading: isLoadingMySubscribedChannels,
    isError: isErrorMySubscribedChannels,
  } = useGetMySubscribedChannels(userId);

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
    myChannels,
    isLoadingMyChannels,
    isErrorMyChannels,
    mySubscribedChannels,
    isLoadingMySubscribedChannels,
    isErrorMySubscribedChannels,
  };
}
