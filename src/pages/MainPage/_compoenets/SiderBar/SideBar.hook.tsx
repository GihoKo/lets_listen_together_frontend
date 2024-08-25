// stores
import useMusicStore from '@/store/useMusicStore';
import useSideBarStore from '@/store/useSideBarStore';

export default function useSideBar() {
  const { isOpen, toggle, close } = useSideBarStore();
  const { music: currentMusic } = useMusicStore();

  const handleToggle = () => {
    toggle();
  };

  const handleClose = () => {
    close();
  };

  return {
    isOpen,
    currentMusic,
    handleToggle,
    handleClose,
  };
}
