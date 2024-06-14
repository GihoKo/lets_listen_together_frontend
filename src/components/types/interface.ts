export interface Channel {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
  ChannelUsers?: string[];
  createdAt?: string;
  tags?: string[];
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
