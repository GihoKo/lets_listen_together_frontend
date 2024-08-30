// libraries

import styled from 'styled-components';

// components
import { ButtonBluePrint } from './StyledComponents';

// types
import { ActionMenuContainerProps } from './ActionMenuContainer.type';

// hooks
import useActionMenuContainer from './ActionMenuContainer.hook';

export default function ActionMenuContainer({ handleDimmedClick, handleUpdateLayer }: ActionMenuContainerProps) {
  const { Buttons } = useActionMenuContainer({ handleUpdateLayer });

  return (
    <FloatingActionButtonDimmed onClick={handleDimmedClick}>
      <FloatingActionButtonContainer>
        {Buttons.map((button) => (
          <PlayerButton key={button.id} onClick={button.onClick}>
            <img src={button.src} alt={button.alt} />
          </PlayerButton>
        ))}
      </FloatingActionButtonContainer>
    </FloatingActionButtonDimmed>
  );
}

const FloatingActionButtonDimmed = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9990;
`;

const FloatingActionButtonContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;
  position: fixed;
  bottom: 80px;
  right: 24px;
`;

const PlayerButton = styled(ButtonBluePrint)`
  position: relative;
  bottom: 0px;
  right: 0px;
`;
