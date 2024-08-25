import { Music } from '@/types/music';

export interface UseMusicProps {
  music: Music;
}

export interface MusicProps {
  music: Music;
  index: number;
  isEditMode: boolean;
}
