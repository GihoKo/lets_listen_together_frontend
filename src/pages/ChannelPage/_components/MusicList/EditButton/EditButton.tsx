// libraries
import styled from 'styled-components';

// types
import useEditButton from './EditButton.hook';
import { EditButtonProps } from './EditButton.type';

export default function EditButton({ isEditMode, handleEditConfirmButtonClick, setIsEditMode }: EditButtonProps) {
  // logics
  const { handleEditButtonClick } = useEditButton({
    setIsEditMode,
  });

  // view
  return (
    <Wrapper
      type='button'
      onClick={isEditMode ? handleEditConfirmButtonClick : handleEditButtonClick}
      $isEditMode={isEditMode}
    >
      {isEditMode ? 'Confirm' : 'Edit'}
    </Wrapper>
  );
}

const Wrapper = styled.button<{
  $isEditMode: boolean;
}>`
  border: ${({ $isEditMode }) => ($isEditMode ? '2px solid var(--mint3)' : '1px solid var(--grey-grey600)')};
  border-radius: 8px;
  width: 80px;
  height: 48px;

  font-weight: bold;
  font-size: 16px;
  color: ${({ $isEditMode }) => ($isEditMode ? 'var(--mint3)' : 'var(--grey-grey600)')};

  cursor: pointer;

  @media (max-width: 1024px) {
    height: 40px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 32px;
    font-size: 12px;
  }
`;
