import create from 'zustand';

type FormData = {
  [key: string]: string;
};

interface ModalStore {
  modalType: string | null;
  isOpen: boolean;
  formData: FormData | null;
  openModal: (modalType: string | null) => void;
  closeModal: () => void;
  setFormData: (formData: FormData) => void;
  resetFormData: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  modalType: null,
  isOpen: false,
  formData: null,
  openModal: (modalType) => {
    set({ isOpen: true });
    set({ modalType: modalType });
  },
  closeModal: () => set({ isOpen: false }),
  setFormData: (formData) => set({ formData }),
  resetFormData: () => set({ formData: null }),
}));

export default useModalStore;
