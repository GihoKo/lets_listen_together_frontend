import { Channel } from '@/types/channel';
import { Dispatch, SetStateAction } from 'react';

export interface ChannelEditorProps {
  EdittedChannel: Channel | null;
  setEdittedChannel: Dispatch<SetStateAction<Channel | null>>;
}

export interface useChannelEditorProps {
  setEdittedChannel: (channel: Channel) => void;
  EdittedChannel: Channel | null;
}
