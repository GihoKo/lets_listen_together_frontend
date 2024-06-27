import { create } from 'zustand';

export const useApplicationAuthTokenStore = create((set) => ({
  accessToken: null,
  setAccessToken: (accessToken: string) => set({ accessToken }),
  removeAccessToken: () => set({ accessToken: null }),
}));

export const useGoogleOAuthTokenStore = create((set) => ({
  googleOAuthToken: null,
  setGoogleOAuthToken: (googleOAuthToken: string) => set({ googleOAuthToken }),
  removeGoogleOAuthToken: () => set({ googleOAuthToken: null }),
}));
