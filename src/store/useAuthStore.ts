import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GoogleOAuthTokenStore {
  googleOAuthToken: string | null;
  setGoogleOAuthToken: (googleOAuthToken: string) => void;
  removeGoogleOAuthToken: () => void;
}

export const useGoogleOAuthTokenStore = create(
  persist<GoogleOAuthTokenStore>(
    (set) => ({
      googleOAuthToken: null,
      setGoogleOAuthToken: (googleOAuthToken: string) => set({ googleOAuthToken }),
      removeGoogleOAuthToken: () => set({ googleOAuthToken: null }),
    }),
    {
      name: 'googleOAuthTokenStore',
      getStorage: () => localStorage,
    },
  ),
);
