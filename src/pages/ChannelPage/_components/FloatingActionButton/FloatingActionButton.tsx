// libraries
import styled from 'styled-components';

// components
import { ButtonBluePrint } from './StyledComponents';

// images
import upChevronSvg from '@/images/svg/up-chevron.svg';

// types
import { FloatingActionButtonProps } from './FloatingActionButton.type';

export default function FloatingActionButton({ handleFloatingButtonClick }: FloatingActionButtonProps) {
  return (
    <Wrapper onClick={handleFloatingButtonClick}>
      <img src={upChevronSvg} alt='플로팅 버튼 이미지' />
    </Wrapper>
  );
}

//  //#CAFDD9

const Wrapper = styled(ButtonBluePrint)`
  display: none;

  position: fixed;
  bottom: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`;
