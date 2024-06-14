import styled from 'styled-components';
import { SideBarToggleButtonProps } from '../../types/props';

export default function SideBarToggleButton({ onClick }: SideBarToggleButtonProps) {
  return <Button onClick={onClick}>{'<'}</Button>;
}

const Button = styled.button`
  border: none;

  width: 18px;
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;

  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
