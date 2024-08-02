import create from 'zustand';
import { Music } from '../types/music';

export interface MusicStore {
  music: Music | null;
  setMusic: (music: Music) => void;
  resetMusic: () => void;
  currentTime: number;
  setCurrentTime: (currentTime: number) => void;
  totalTime: number;
  setTotalTime: (totalTime: number) => void;
  progressValue: number;
  setProgressValue: (progressValue: number) => void;
  isPlayerPlaying: boolean;
  setIsPlayerPlaying: (isPlayerPlaying: boolean) => void;
  handleTogglePlayButtonClick: () => void;
  setHandleTogglePlayButtonClick: (fn: () => void) => void;
  handleProgressBarClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  setHandleProgressBarClick: (fn: (e: React.MouseEvent<HTMLDivElement>) => void) => void;
}

const useMusicStore = create<MusicStore>((set) => ({
  music: null,
  setMusic: (music) => set({ music }),
  resetMusic: () => set({ music: null }),
  currentTime: 0,
  setCurrentTime: (currentTime) => set({ currentTime }),
  totalTime: 0,
  setTotalTime: (totalTime) => set({ totalTime }),
  progressValue: 0,
  setProgressValue: (progressValue) => set({ progressValue }),
  isPlayerPlaying: false,
  setIsPlayerPlaying: (isPlayerPlaying) => set({ isPlayerPlaying }),
  handleTogglePlayButtonClick: () => {},
  setHandleTogglePlayButtonClick: (fn) => set({ handleTogglePlayButtonClick: fn }),
  // eslint-disable-next-line
  handleProgressBarClick: (e: React.MouseEvent<HTMLDivElement>) => {},
  setHandleProgressBarClick: (fn) => set({ handleProgressBarClick: fn }),
}));

export default useMusicStore;
