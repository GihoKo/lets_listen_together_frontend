import { Music } from '@/types/music';

export interface UseMusicListProps {
  musicList: Music[];
}

export interface MusicListProps {
  musicList: Music[];
  setMusicList: React.Dispatch<React.SetStateAction<Music[]>>;
}
