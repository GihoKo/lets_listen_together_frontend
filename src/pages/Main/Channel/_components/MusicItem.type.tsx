import { Music } from '@/types/music';

export interface UseMusicItemProps {
  music: Music;
  currentMusic: Music | null;
  setMusicList: React.Dispatch<React.SetStateAction<Music[]>>;
}

export interface MusicItemProps {
  music: Music;
  index: number;
  currentMusic: Music | null;
  setMusicList: React.Dispatch<React.SetStateAction<Music[]>>;
  isEditMode: boolean;
}
