import styled from 'styled-components';
import { CreateChannelButtonProps } from '../../types/interface';

export default function CreateChannelButton({ isOpen, onClick }: CreateChannelButtonProps) {
  return (
    <Button $isOpen={isOpen} onClick={onClick}>
      {'+'}
    </Button>
  );
}

const Button = styled.button<{
  $isOpen: boolean;
}>`
  border: none;
  width: 18px;
  height: 18px;

  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  background-color: white;

  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
