import { Channel } from '@/types/channel';

export interface SideBarChannelProps {
  channel: Channel;
  isOpen: boolean;
  isCurrentChannel: boolean;
}

export interface useChannelProps {
  isCurrentChannel: boolean;
}
