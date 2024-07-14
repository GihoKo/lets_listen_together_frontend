import { Channel } from '../../../types/channel';

export interface SideBarChannelItemProps {
  channel: Channel;
  isOpen: boolean;
  isCurrentChannel: boolean;
}

export interface useChannelItemProps {
  isCurrentChannel: boolean;
}
