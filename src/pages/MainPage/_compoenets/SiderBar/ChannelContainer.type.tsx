import { Channel } from '@/types/channel';

export interface ChannelContainerProps {
  data: Channel[] | undefined;
  isOpen: boolean;
}
