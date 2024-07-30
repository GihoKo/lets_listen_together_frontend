import { User } from './user';

export interface Channel {
  id: string;
  ownerId: string;
  name: string;
  image: string;
  description: string;
  users: User[];
  ChannelUsers: string[];
  createdAt: string;
  tags: string[];
}

export type ChannelId = Pick<Channel, 'id'>;

export type ChannelName = Pick<Channel, 'name'>;

export type ChannelDescription = Pick<Channel, 'description'>;

export type ChannelImage = Pick<Channel, 'image'>;

export type ChannelTags = Pick<Channel, 'tags'>;

export type ChannelOwnerId = Pick<Channel, 'ownerId'>;

export type ChannelCreatedAt = Pick<Channel, 'createdAt'>;

export type ChannelChannelUsers = Pick<Channel, 'ChannelUsers'>;
