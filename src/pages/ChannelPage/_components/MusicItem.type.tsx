import { Music } from '@/types/music';

export interface UseMusicItemProps {
  music: Music;
}

export interface MusicItemProps {
  music: Music;
  index: number;
  isEditMode: boolean;
}
