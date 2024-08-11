// hooks
import useModalStore from '@/store/useModalStore';
import useGetMySubscribedChannels from '@/apis/hooks/useGetMySubscribedChannels';
import useMusicStore from '@/store/useMusicStore';
import useSideBarStore from '@/store/useSideBarStore';
import useGetMyOwnChannels from '@/apis/hooks/useGetMyOwnChannels';
import { useUserStore } from '@/store/useUserStore';

// types
import { ModalType } from '@/types/enum';

// components
import CreateChannelModal from '@/components/Organisms/Modal/CreateChannelModal/CreateChannelModal';

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
    myChannels,
    isLoadingMyChannels,
    isErrorMyChannels,
    mySubscribedChannels,
    isLoadingMySubscribedChannels,
    isErrorMySubscribedChannels,
    handleToggle,
    handleCreateChannelModalOpenButtonClick,
    handleClose,
  };
}
