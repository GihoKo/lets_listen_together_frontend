// types
import { useChannelItemProps } from './ChannelItem.type';

// images
import playListSvg from '../../../images/svg/playlist.svg';
import playListFocusedSvg from '../../../images/svg/playlist-focused.svg';

export default function useChannelItem({ isCurrentChannel }: useChannelItemProps) {
  const handleDefaultPlayListImageToggle = () => {
    if (isCurrentChannel) {
      return playListFocusedSvg;
    }
    return playListSvg;
  };

  return { handleDefaultPlayListImageToggle };
}
