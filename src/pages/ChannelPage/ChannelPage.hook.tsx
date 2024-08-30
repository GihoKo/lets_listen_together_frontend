// hooks
import { useState } from 'react';

export default function useChannelPage() {
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

  type Layer = 'player' | 'musicList';

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
