import { Channel } from '@/types/channel';

export interface ChannelItemProps {
  channel: Channel;
  EdittedChannel: Channel | null;
  onEditButtonClick: (channel: Channel) => void;
}
