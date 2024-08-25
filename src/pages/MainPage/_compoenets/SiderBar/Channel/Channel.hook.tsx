// types
import { useChannelProps } from './Channel.type';

// images
import playListSvg from '@/images/svg/playlist.svg';
import playListFocusedSvg from '@/images/svg/playlist-focused.svg';

export default function useChannel({ isCurrentChannel }: useChannelProps) {
  const handleDefaultPlayListImageToggle = () => {
    if (isCurrentChannel) {
      return playListFocusedSvg;
    }
    return playListSvg;
  };

  return { handleDefaultPlayListImageToggle };
}
