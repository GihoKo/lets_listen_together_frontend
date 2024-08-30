// images
import musicSvg from '@/images/svg/music.svg';
import playlistSvg from '@/images/svg/playlist.svg';

// types
import { useActionMenuContainerProps } from './ActionMenuContainer.type';

export default function useActionMenuContainer({ handleUpdateLayer }: useActionMenuContainerProps) {
  const Buttons = [
    {
      id: 1,
      src: musicSvg,
      alt: '음악 버튼 이미지',
      onClick: () => handleUpdateLayer({ layer: 'player' }),
    },
    {
      id: 2,
      src: playlistSvg,
      alt: '플레이리스트 버튼 이미지',
      onClick: () => handleUpdateLayer({ layer: 'musicList' }),
    },
  ];

  return { Buttons };
}
