import { Channel } from '@/types/channel';

export interface ChannelContainerProps {
  isOpen: boolean;
  channelList: Channel[] | undefined;
}
