import { UseEditButtonProps } from './EditButton.type';

export default function useEditButton({ setIsEditMode }: UseEditButtonProps) {
  const handleEditButtonClick = () => {
    setIsEditMode((prev) => !prev);
  };

  return {
    handleEditButtonClick,
  };
}
