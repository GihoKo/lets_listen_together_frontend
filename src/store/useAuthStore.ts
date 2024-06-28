import { create } from 'zustand';

interface ApplicationAuthTokenStore {
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  removeAccessToken: () => void;
}

interface GoogleOAuthTokenStore {
  googleOAuthToken: string | null;
  setGoogleOAuthToken: (googleOAuthToken: string) => void;
  removeGoogleOAuthToken: () => void;
}

export const useApplicationAuthTokenStore = create<ApplicationAuthTokenStore>((set) => ({
  accessToken: null,
  setAccessToken: (accessToken: string) => set({ accessToken }),
  removeAccessToken: () => set({ accessToken: null }),
}));

export const useGoogleOAuthTokenStore = create<GoogleOAuthTokenStore>((set) => ({
  googleOAuthToken: null,
  setGoogleOAuthToken: (googleOAuthToken: string) => set({ googleOAuthToken }),
  removeGoogleOAuthToken: () => set({ googleOAuthToken: null }),
}));
