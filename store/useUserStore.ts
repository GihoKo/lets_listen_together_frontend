import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      user: null,
      setUser: (user: User) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'userStore',
      getStorage: () => localStorage,
    },
  ),
);
