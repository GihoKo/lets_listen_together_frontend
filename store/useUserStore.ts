import { create } from 'zustand';

interface User {
  id?: string;
  email?: string;
  name?: string;
  picture?: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
}));
