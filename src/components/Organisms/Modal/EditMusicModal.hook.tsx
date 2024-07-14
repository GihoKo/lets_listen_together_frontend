// hooks
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useUpdateMusic from '@/apis/hooks/useUpdateMusic';
import useModalStore from '@/store/useModalStore';

// types
import { ModalType } from '@/types/enum';
import { EditMusicModalProps } from './EditMusicModal.hook.type';

export default function useEditMusicModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.EDIT_MUSIC) return null;

  const modalProps = props as EditMusicModalProps;

  const upLoadUpdateMusicMutation = useUpdateMusic();
  const { channelId } = useParams<{ channelId: string }>();
  const [musicData, setMusicData] = useState({
    title: modalProps.music.title,
    artist: modalProps.music.artist,
    url: modalProps.music.url,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMusicData({
      ...musicData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call API to update music
    const edittedMusic = {
      channelId: channelId,
      title: musicData.title,
      artist: musicData.artist,
      url: musicData.url,
    };
    upLoadUpdateMusicMutation.mutate({ musicId: modalProps.music.id, music: edittedMusic });
    closeModal();
  };

  return { musicData, handleChange, handleSubmit, closeModal };
}
