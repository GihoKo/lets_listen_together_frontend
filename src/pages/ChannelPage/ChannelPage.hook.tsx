// hooks
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export type Layer = 'player' | 'musicList';

export default function useChannelPage() {
  // 마지막 방문한 페이지 저장
  const { channelId } = useParams<{ channelId: string }>();
  localStorage.setItem('lastVisitedPage', `/main/channel/${channelId}`);

  const [isFocusedFloatingButton, setIsFocusedFloatingButton] = useState(false);

  const handleFloatingButtonClick = () => {
    setIsFocusedFloatingButton((prev) => !prev);
  };

  const handleDimmedClick = () => {
    setIsFocusedFloatingButton(false);
  };

  const DEFAULT_Z_INDEX = 500;

  const SELECTED_Z_INDEX = 501;

  const [zIndex, setZIndex] = useState({
    player: DEFAULT_Z_INDEX,
    musicList: SELECTED_Z_INDEX,
  });

  const handleUpdateLayer = ({ layer }: { layer: Layer }) => {
    switch (layer) {
      case 'player':
        setZIndex({ player: SELECTED_Z_INDEX, musicList: DEFAULT_Z_INDEX });
        break;
      case 'musicList':
        setZIndex({ player: DEFAULT_Z_INDEX, musicList: SELECTED_Z_INDEX });
        break;
      default:
        break;
    }
  };

  return {
    isFocusedFloatingButton,
    zIndex,
    handleFloatingButtonClick,
    handleDimmedClick,
    handleUpdateLayer,
  };
}
