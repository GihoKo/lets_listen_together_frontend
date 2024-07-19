// hooks
import { useState } from 'react';
import useCreateMusic from '@/apis/hooks/useCreateMusic';
import useModalStore from '@/store/useModalStore';

// types
import { ModalType } from '@/types/enum';

export default function useCreateMusicModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.CREATE_MUSIC) return null;

  const upLoadMusicMutation = useCreateMusic();
  const modalProps = props as { channelId: string; order: number };
  const [musicData, setMusicData] = useState({
    title: '',
    artist: '',
    url: '',
    order: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMusicData({
      ...musicData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const music = {
      channelId: modalProps.channelId,
      order: modalProps.order,
      title: musicData.title,
      artist: musicData.artist,
      url: musicData.url,
    };
    upLoadMusicMutation.mutate({ music });
    closeModal();
  };

  return { musicData, handleChange, handleSubmit, closeModal };
}
