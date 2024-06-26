import { Channel } from '../../types/channel';

export interface SideBarToggleButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export interface SideBarChannelItemProps {
  channel: Channel;
  isOpen: boolean;
}

export interface CreateChannelButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export interface ChannelContainerProps {
  isOpen: boolean;
}
