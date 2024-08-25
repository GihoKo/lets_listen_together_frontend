// hooks
import useUpdateMusicOrder from '@/apis/hooks/useUpdateMusicListOrder';
import useModalStore from '@/store/useModalStore';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

// components
import CreateMusicModal from '@/components/Organisms/Modal/CreateMusicModal/CreateMusicModal';

// types
import { ModalType } from '@/types/enum';
import useMusicListStore from '@/store/useMusicListStore';

export default function useMusicList() {
  const { openModal } = useModalStore();
  const { channelId } = useParams<{ channelId: string }>();
  const { musicList } = useMusicListStore();
  const [isEditMode, setIsEditMode] = useState(false);
  const uploadUpdateMusicOrder = useUpdateMusicOrder();

  const handleCreateMusicButtonButtonClick = () => {
    openModal(ModalType.CREATE_MUSIC, <CreateMusicModal />, { channelId, order: musicList.length });
  };

  const handleEditConfirmButtonClick = () => {
    uploadUpdateMusicOrder.mutate({ musicList });
    setIsEditMode(false);
  };

  return {
    isEditMode,
    channelId,
    setIsEditMode,
    handleCreateMusicButtonButtonClick,
    handleEditConfirmButtonClick,
  };
}
