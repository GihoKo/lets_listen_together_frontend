// hooks
import { useEffect, useRef, useState } from 'react';
import useUpdateMusic from '@/apis/hooks/useUpdateMusic';
import useModalStore from '@/store/useModalStore';

// types
import { ModalType } from '@/types/enum';
import { EditMusicModalProps } from './EditMusicModal.hook.type';
import { checkIsChannelOwner } from '@/utils/checkIsChannelOwner';
import useGetChannelById from '@/apis/hooks/useGetChannelById';

export default function useEditMusicModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.EDIT_MUSIC) return null;

  const modalProps = props as EditMusicModalProps;

  const upLoadUpdateMusicMutation = useUpdateMusic();
  const [musicData, setMusicData] = useState({
    title: modalProps.music.title,
    artist: modalProps.music.artist,
    url: modalProps.music.url,
  });
  const { data } = useGetChannelById(modalProps.channelId);
  const ownerIdRef = useRef<string>();
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMusicData({
      ...musicData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkIsChannelOwner({ ownerId: ownerIdRef.current })) {
      updateMusic();
      closeModal();
    } else {
      setErrorMessage('채널의 주인만 음악을 수정할 수 있습니다.');
    }
  };

  const updateMusic = () => {
    const edittedMusic = {
      channelId: modalProps.channelId,
      title: musicData.title,
      artist: musicData.artist,
      url: musicData.url,
    };
    upLoadUpdateMusicMutation.mutate({ musicId: modalProps.music.id, music: edittedMusic });
    closeModal();
  };

  useEffect(() => {
    if (data) {
      ownerIdRef.current = data.ownerId;
    }
  }, [data]);

  return { musicData, errorMessage, handleChange, handleSubmit, closeModal };
}
