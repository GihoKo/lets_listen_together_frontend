// libraries
import styled from 'styled-components';

// types
import { SideBarToggleButtonProps } from './SideBarToggleButton.type';

// images
import SideBarOpenSvg from '@/images/svg/sidebar-open.svg';
import SideBarCloseSvg from '@/images/svg/sidebar-close.svg';

export default function SideBarToggleButton({ onClick, isOpen }: SideBarToggleButtonProps) {
  return (
    // view
    <Button onClick={onClick}>
      <img src={isOpen ? SideBarCloseSvg : SideBarOpenSvg} alt='사이드바 토글 버튼' />
    </Button>
  );
}

const Button = styled.button`
  border-radius: 6px;
  width: 32px;
  height: 32px;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 6px;
  cursor: pointer;

  &:hover {
    background-color: var(--grey-grey250);
  }

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    display: flex;
  }
`;
