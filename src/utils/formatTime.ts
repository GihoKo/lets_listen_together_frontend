import { prefixZeroForNumber } from './prefixZeroForNumber';

// 00:00:00 형태로 return
export const formatTime = (time: number) => {
  let seconds = time;
  const hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  return `${prefixZeroForNumber(hours)}:${prefixZeroForNumber(minutes)}:${prefixZeroForNumber(seconds)}`;
};
