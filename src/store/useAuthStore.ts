import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ApplicationAuthTokenStore {
  accessToken: string | null;
  setAccessToken: (accessToken: string | undefined) => void;
  removeAccessToken: () => void;
}

interface GoogleOAuthTokenStore {
  googleOAuthToken: string | null;
  setGoogleOAuthToken: (googleOAuthToken: string) => void;
  removeGoogleOAuthToken: () => void;
}

export const useApplicationAuthTokenStore = create(
  persist<ApplicationAuthTokenStore>(
    (set) => ({
      accessToken: null,
      setAccessToken: (accessToken: string | undefined) => set({ accessToken }),
      removeAccessToken: () => set({ accessToken: null }),
    }),
    {
      name: 'applicationAuthTokenStore',
      getStorage: () => localStorage,
    },
  ),
);

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
