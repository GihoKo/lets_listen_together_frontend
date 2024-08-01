import { create } from 'zustand';

interface ChannelIdStore {
  channelId: string | null;
  setChannelId: (channelId: string | undefined) => void;
}

const useChannelIdStore = create<ChannelIdStore>((set) => ({
  channelId: null,
  setChannelId: (channelId) => set({ channelId }),
}));

export default useChannelIdStore;
