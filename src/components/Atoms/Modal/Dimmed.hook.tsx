// store
import useModalStore from '@/store/useModalStore';

export default function useDimmed() {
  const { closeModal } = useModalStore();

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return { handleModalClose };
}
