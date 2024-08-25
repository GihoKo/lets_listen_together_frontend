// libraries
import styled from 'styled-components';

// types
import { CreateChannelButtonProps } from './CreateChannelButton.type';

// images
import addChannelSvg from '@/images/svg/add-square.svg';

// hooks
import useCreateChannelButton from './CreateChannelButton.hook';

export default function CreateChannelButton({ isOpen }: CreateChannelButtonProps) {
  // logics
  const { handleClick } = useCreateChannelButton();

  // view
  return (
    <Button $isOpen={isOpen} onClick={handleClick}>
      <img src={addChannelSvg} alt='채널 추가 버튼' />
    </Button>
  );
}

const Button = styled.button<{
  $isOpen: boolean;
}>`
  border-radius: 6px;

  width: 32px;
  height: 32px;

  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
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

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
