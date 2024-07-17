import { create } from 'zustand';

interface SideBarStore {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const useSideBarStore = create<SideBarStore>((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}));

export default useSideBarStore;
