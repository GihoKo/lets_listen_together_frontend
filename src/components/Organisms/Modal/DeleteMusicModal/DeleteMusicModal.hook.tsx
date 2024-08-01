// hooks
import useDeleteMusic from '@/apis/hooks/useDeleteMusic';
import useGetChannelById from '@/apis/hooks/useGetChannelById';
import useModalStore from '@/store/useModalStore';
import { useEffect, useRef, useState } from 'react';

// types
import { ModalType } from '@/types/enum';
import { Music } from '@/types/music';

// utils
import { checkIsChannelOwner } from '@/utils/checkIsChannelOwner';

export default function useDeleteMusicModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.DELETE_MUSIC) return null;

  const modalProps = props as { music: Music; channelId: string };
  const upLoadDeleteMusicMutation = useDeleteMusic();
  const { data } = useGetChannelById(modalProps.channelId);
  const ownerIdRef = useRef<string>();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkIsChannelOwner({ ownerId: ownerIdRef.current })) {
      deleteMusic();
      closeModal();
    } else {
      setErrorMessage('채널의 주인만 음악을 삭제할 수 있습니다.');
    }
  };

  function deleteMusic() {
    upLoadDeleteMusicMutation.mutate(modalProps.music.id);
  }

  useEffect(() => {
    if (data) {
      ownerIdRef.current = data.ownerId;
    }
  }, [data]);

  return { handleSubmit, closeModal, modalProps, errorMessage };
}
