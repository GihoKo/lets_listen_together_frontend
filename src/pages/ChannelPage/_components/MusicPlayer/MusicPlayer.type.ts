export interface VideoData {
  id: string;
  title: string;
  channelTitle: string;
  thumbnails: string;
}

export interface MusicPlayerProps {
  playNextMusic: () => void;
  playPrevMusic: () => void;
}

export interface UseMusicPlayerProps {
  playNextMusic: () => void;
}
