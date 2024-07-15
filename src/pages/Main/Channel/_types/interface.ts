export interface Music {
  id: string;
  title: string;
  artist: string;
  url: string;
  channelId: string | undefined;
}

export type MusicRequestData = Omit<Music, 'id'>;

export interface MusicItemProps {
  index: number;
  music: Music;
  currentMusic: Music | null;
}

export interface ChatMessage {
  id: string;
  channelId: string;
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
