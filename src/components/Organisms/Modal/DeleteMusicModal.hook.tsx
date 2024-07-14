// hooks
import useDeleteMusic from '@/apis/hooks/useDeleteMusic';
import useModalStore from '@/store/useModalStore';

// types
import { ModalType } from '@/types/enum';
import { Music } from '@/types/music';

export default function useDeleteMusicModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.DELETE_MUSIC) return null;

  const modalProps = props as { music: Music };

  const upLoadDeleteMusicMutation = useDeleteMusic();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    upLoadDeleteMusicMutation.mutate(modalProps.music.id);
    closeModal();
  };
  return { handleSubmit, closeModal, modalProps };
}
