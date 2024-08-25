export interface EditButtonProps {
  isEditMode: boolean;
  handleEditConfirmButtonClick: () => void;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UseEditButtonProps {
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}
