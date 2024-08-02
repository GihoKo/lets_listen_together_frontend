import { Music } from '@/types/music';
import { create } from 'zustand';

interface MusicListStore {
  musicList: Music[];
  setMusicList: (musicList: Music[]) => void;
}

const useMusicListStore = create<MusicListStore>((set) => ({
  musicList: [],
  setMusicList: (musicList) => set({ musicList }),
}));

export default useMusicListStore;
