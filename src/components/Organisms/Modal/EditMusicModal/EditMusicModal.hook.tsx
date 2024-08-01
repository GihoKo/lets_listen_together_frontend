// hooks
import { useEffect, useRef, useState } from 'react';
import useUpdateMusic from '@/apis/hooks/useUpdateMusic';
import useModalStore from '@/store/useModalStore';
import useGetChannelById from '@/apis/hooks/useGetChannelById';

// types
import { ErrorMessagesType, ModalType } from '@/types/enum';

// utils
import validateMusicData from '@/utils/validateMusicData';
import { checkIsChannelOwner } from '@/utils/checkIsChannelOwner';
import { EditMusicModalProps } from './EditMusicModal.hook.type';

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
  const { data: channel } = useGetChannelById(modalProps.channelId);
  const ownerIdRef = useRef<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMusicData({
      ...musicData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!checkIsChannelOwner({ ownerId: ownerIdRef.current })) {
      setErrorMessage(ErrorMessagesType.MUSIC_EDIT_PERMISSION);
      return;
    }
    if (
      !validateMusicData({
        musicData: {
          title: musicData.title,
          artist: musicData.artist,
          url: musicData.url,
        },
        setErrorMessage,
      })
    )
      return;

    updateMusic();
    closeModal();
  };

  const updateMusic = () => {
    const edittedMusic = {
      channelId: modalProps.channelId,
      title: musicData.title,
      artist: musicData.artist,
      url: musicData.url,
    };

    upLoadUpdateMusicMutation.mutate({ musicId: modalProps.music.id, music: edittedMusic });
  };

  useEffect(() => {
    if (channel) {
      ownerIdRef.current = channel.ownerId;
    }
  }, [channel]);

  return { musicData, errorMessage, handleChange, handleSubmit, closeModal };
}
