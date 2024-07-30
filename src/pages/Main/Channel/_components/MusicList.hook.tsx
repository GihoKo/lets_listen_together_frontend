// hooks
import useUpdateMusicOrder from '@/apis/hooks/useUpdateMusicListOrder';
import useModalStore from '@/store/useModalStore';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

// components
import CreateMusicModal from '@/components/Organisms/Modal/CreateMusicModal';

// types
import { ModalType } from '@/types/enum';
import { UseMusicListProps } from './MusicList.type';

export default function useMusicList({ musicList }: UseMusicListProps) {
  const { openModal } = useModalStore();
  const { channelId } = useParams<{ channelId: string }>();
  const uploadUpdateMusicOrder = useUpdateMusicOrder();

  const handleCreateMusicButtonButtonClick = () => {
    openModal(ModalType.CREATE_MUSIC, <CreateMusicModal />, { channelId, order: musicList.length });
  };

  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditMode(true);
  };

  const handleEditConfirmButtonClick = () => {
    uploadUpdateMusicOrder.mutate({ musicList });
    setIsEditMode(false);
  };

  return {
    isEditMode,
    channelId,
    handleCreateMusicButtonButtonClick,
    handleEditButtonClick,
    handleEditConfirmButtonClick,
  };
}
