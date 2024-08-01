// components
import DeleteMusicModal from '@/components/Organisms/Modal/DeleteMusicModal/DeleteMusicModal';
import EditMusicModal from '@/components/Organisms/Modal/EditMusicModal/EditMusicModal';

// hooks
import useModalStore from '@/store/useModalStore';
import useMusicStore from '@/store/useMusicStore';
import { useEffect, useState } from 'react';

// apis
import { getMusicImage } from '@/apis/services/youtube';

// types
import { ModalType } from '@/types/enum';
import { UseMusicItemProps } from './MusicItem.type';
import { useParams } from 'react-router-dom';

export default function useMusicItem({ music, currentMusic, setMusicList }: UseMusicItemProps) {
  const { openModal } = useModalStore();
  const { setMusic } = useMusicStore();
  const [musicImageUrl, setMusicImageUrl] = useState<string>();
  const isCurrentMusic = currentMusic?.id === music.id;
  const { channelId } = useParams();

  const handlePlayButtonClick = () => {
    setMusic(music);
  };

  const handleEditMusicButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    openModal(ModalType.EDIT_MUSIC, <EditMusicModal />, { music, channelId });
  };

  const handleDeleteButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    openModal(ModalType.DELETE_MUSIC, <DeleteMusicModal />, { music, channelId });
  };

  const handleOrderUpButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setMusicList((prev) => {
      const newMusicList = [...prev];
      const currentIndex = newMusicList.findIndex((m) => m.id === music.id);
      if (currentIndex === 0) return newMusicList;

      // 객체 순서 바꾸기
      [newMusicList[currentIndex], newMusicList[currentIndex - 1]] = [
        newMusicList[currentIndex - 1],
        newMusicList[currentIndex],
      ];

      // 실제 order값 바꾸기
      [newMusicList[currentIndex].order, newMusicList[currentIndex - 1].order] = [
        newMusicList[currentIndex - 1].order,
        newMusicList[currentIndex].order,
      ];

      return newMusicList;
    });
  };

  const handleOrderDownButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setMusicList((prev) => {
      const newMusicList = [...prev];
      const currentIndex = newMusicList.findIndex((m) => m.id === music.id);
      if (currentIndex === newMusicList.length - 1) return newMusicList;

      [newMusicList[currentIndex], newMusicList[currentIndex + 1]] = [
        newMusicList[currentIndex + 1],
        newMusicList[currentIndex],
      ];

      [newMusicList[currentIndex].order, newMusicList[currentIndex + 1].order] = [
        newMusicList[currentIndex + 1].order,
        newMusicList[currentIndex].order,
      ];

      return newMusicList;
    });
  };

  useEffect(() => {
    if (!music?.url) return;

    getMusicImage({ music })
      .then((res) => {
        setMusicImageUrl(res?.items[0]?.snippet?.thumbnails?.default?.url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [music?.url]);

  return {
    isCurrentMusic,
    handlePlayButtonClick,
    handleEditMusicButtonClick,
    handleDeleteButtonClick,
    handleOrderUpButton,
    handleOrderDownButton,
    musicImageUrl,
    channelId,
  };
}
