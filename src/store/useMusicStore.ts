import create from 'zustand';
import { Music } from '../types/music';

interface MusicStore {
  music: Music | null;
  setMusic: (music: Music) => void;
  resetMusic: () => void;
}

const useMusicStore = create<MusicStore>((set) => ({
  music: null,

  setMusic: (music) => set({ music }),
  resetMusic: () => set({ music: null }),
}));

export default useMusicStore;
