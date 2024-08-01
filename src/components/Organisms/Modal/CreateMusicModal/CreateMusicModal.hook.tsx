// hooks
import { useEffect, useRef, useState } from 'react';
import useCreateMusic from '@/apis/hooks/useCreateMusic';
import useModalStore from '@/store/useModalStore';

// types
import { ErrorMessagesType, ModalType } from '@/types/enum';
import validateMusicData from '@/utils/validateMusicData';
import { checkIsChannelOwner } from '@/utils/checkIsChannelOwner';
import useGetChannelById from '@/apis/hooks/useGetChannelById';

export default function useCreateMusicModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.CREATE_MUSIC) return null;

  const upLoadCreateMusicMutation = useCreateMusic();
  const modalProps = props as { channelId: string; order: number };
  const [musicData, setMusicData] = useState({
    title: '',
    artist: '',
    url: '',
    order: 0,
  });
  const { data: channel } = useGetChannelById(modalProps.channelId);
  const ownerIdRef = useRef<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!checkIsChannelOwner({ ownerId: ownerIdRef.current })) {
      setErrorMessage(ErrorMessagesType.MUSIC_CREATE_PERMISSION);
      return;
    }
    if (!validateMusicData({ musicData, setErrorMessage })) return;

    CreateMusic();
    closeModal();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMusicData({
      ...musicData,
      [e.target.name]: e.target.value,
    });
  };

  const CreateMusic = () => {
    const music = {
      channelId: modalProps.channelId,
      order: modalProps.order,
      title: musicData.title,
      artist: musicData.artist,
      url: musicData.url,
    };
    upLoadCreateMusicMutation.mutate({ music });
  };

  useEffect(() => {
    if (channel) {
      ownerIdRef.current = channel.ownerId;
    }
  }, [channel]);

  return { musicData, errorMessage, handleChange, handleSubmit, closeModal };
}
