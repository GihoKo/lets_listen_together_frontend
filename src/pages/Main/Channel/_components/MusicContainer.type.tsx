import { Music } from '@/types/music';

export interface MusicContainerProps {
  musicList: Music[];
  isEditMode: boolean;
  setMusicList: React.Dispatch<React.SetStateAction<Music[]>>;
}
