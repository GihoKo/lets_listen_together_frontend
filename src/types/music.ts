export interface Music {
  id: number;
  title: string;
  artist: string;
  url: string;
  channelId: string | undefined;
}

export type MusicId = Pick<Music, 'id'>;

export type MusicTitle = Pick<Music, 'title'>;

export type MusicArtist = Pick<Music, 'artist'>;

export type MusicUrl = Pick<Music, 'url'>;

export type MusicChannelId = Pick<Music, 'channelId'>;
