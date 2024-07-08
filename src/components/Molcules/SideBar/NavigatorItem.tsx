import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NavigatorItemProps {
  isOpen: boolean;
  name: string;
  path: string;
  icon: string[] | string;
  isFocused: boolean;
}

export default function NavigatorItem({ isOpen, name, path, icon, isFocused }: NavigatorItemProps) {
  return (
    <Wrapper to={path} $isFocused={isFocused}>
      <ImageBox>
        <img src={icon as string} alt='네비게이터 아이템 이미지' />
      </ImageBox>
      <Name $isOpen={isOpen} $isFocused={isFocused}>
        {name}
      </Name>
    </Wrapper>
  );
}

const Wrapper = styled(Link)<{ $isFocused: boolean }>`
  box-sizing: border-box;
  border: ${(props) => (props.$isFocused ? '2px solid var(--mint5)' : '2px solid transparent')};
  border-radius: 6px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  background-color: ${(props) => (props.$isFocused ? 'var(--mint7)' : 'transparent')};
  box-shadow: ${(props) => (props.$isFocused ? '0 0 10px var(--mint5)' : 'none')};
  padding: 8px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$isFocused ? 'var(--mint7)' : 'var(--grey-grey300)')};
  }
`;

const ImageBox = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const Name = styled.div<{ $isOpen: boolean; $isFocused: boolean }>`
  width: 100%;

  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  font-size: 16px;
  color: ${(props) => (props.$isFocused ? 'var(--mint3)' : 'var(--grey-grey600)')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;
`;
