import { Music } from '@/types/music';

export interface VideoData {
  id: string;
  title: string;
  channelTitle: string;
  thumbnails: string;
}

export interface MusicPlayerProps {
  currentMusic: Music | null;
  playNextMusic: () => void;
  playPrevMusic: () => void;
}

export interface UseMusicPlayerProps {
  currentMusic: Music | null;
  playNextMusic: () => void;
}
