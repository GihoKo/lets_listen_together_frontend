import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// UserId 타입을 정의
export type UserId = string | undefined;

interface User {
  id: UserId;
  email: string;
  name: string;
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
      name: 'userStore', // 스토리지에 저장할 이름을 지정합니다.
      getStorage: () => localStorage, // 사용할 storage를 지정합니다.
    },
  ),
);
