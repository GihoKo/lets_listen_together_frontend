export interface Music {
  id: number;
  title: string;
  artist: string;
  url: string;
  channelId: string;
}

export type MusicRequestData = Omit<Music, 'id'>;

export interface MusicItemProps {
  music: Music;
  selectMusic: (music: Music) => void;
}

export interface ChatMessage {
  id: number;
  channelId: number;
  userId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}
