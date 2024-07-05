export interface Music {
  id: number;
  title: string;
  artist: string;
  url: string;
  channelId: string;
}

export type MusicRequestData = Omit<Music, 'id'>;

export interface MusicItemProps {
  index: number;
  music: Music;
}

export interface ChatMessage {
  id: number;
  channelId: number;
  userId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}
