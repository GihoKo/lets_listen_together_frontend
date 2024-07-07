import React from 'react';
import create from 'zustand';

interface ModalStore {
  isOpen: boolean;
  type: string | null;
  component: React.ReactNode | null;
  props: unknown;
  openModal: (type: string | null, component: React.ReactNode | null, props?: unknown) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  type: null,
  component: null,
  props: {},
  openModal: (type, component, props = {}) => set({ isOpen: true, type, component, props }),
  closeModal: () => set({ isOpen: false, type: null, component: null, props: {} }),
}));

export default useModalStore;
