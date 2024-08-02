import { Music } from '@/types/music';
import { create } from 'zustand';

export interface MusicListStore {
  musicList: Music[];
  setMusicList: (updateFn: (musicList: Music[]) => Music[]) => void;
}

const useMusicListStore = create<MusicListStore>((set) => ({
  musicList: [],
  setMusicList: (updateFn) => set((state) => ({ musicList: updateFn(state.musicList) })),
}));

export default useMusicListStore;
