import { create } from 'zustand';

interface SideBarStore {
  isOpen: boolean;
  toggle: () => void;
}

const useSideBarStore = create<SideBarStore>((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSideBarStore;
