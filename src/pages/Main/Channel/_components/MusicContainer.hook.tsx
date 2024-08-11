// hooks
import useMusicListStore from '@/store/useMusicListStore';
import { useRef } from 'react';

export default function useMusicContainer() {
  const { musicList } = useMusicListStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollUpButtonClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return { musicList, containerRef, handleScrollUpButtonClick };
}
