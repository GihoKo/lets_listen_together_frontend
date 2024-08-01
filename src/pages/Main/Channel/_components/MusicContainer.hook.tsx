// hooks
import useMusicStore from '@/store/useMusicStore';
import { useRef } from 'react';

export default function useMusicContainer() {
  const { music: currentMusic } = useMusicStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollUpButtonClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return { containerRef, currentMusic, handleScrollUpButtonClick };
}
