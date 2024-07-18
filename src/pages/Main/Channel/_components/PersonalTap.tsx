import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface PersonalTapProps {
  currentTapValue: number;
  setcurrentTapValue: Dispatch<SetStateAction<number>>;
}

export default function PersonalTap({ currentTapValue, setcurrentTapValue }: PersonalTapProps) {
  const PERSONAL_TAP = [
    { name: 'Player', value: 0 },
    { name: 'List', value: 1 },
  ];
  const personalTapLength = PERSONAL_TAP.length;

  const handleTapChange = (tap: number) => {
    setcurrentTapValue(tap);
  };

  return (
    <Container $personalTapLength={personalTapLength}>
      {PERSONAL_TAP.map((tap) => {
        return (
          <Button
            key={tap.value}
            type='button'
            onClick={() => {
              handleTapChange(tap.value);
            }}
            $currentTapValue={currentTapValue}
            $tapValue={tap.value}
          >
            {tap.name}
          </Button>
        );
      })}
    </Container>
  );
}

const Container = styled.div<{
  $personalTapLength: number;
}>`
  display: none;

  @media (max-width: 768px) {
    width: 100%;

    font-size: 24px;
    display: grid;
    grid-template-columns: repeat(${(props) => props.$personalTapLength}, 1fr);

    background-color: var(--grey-grey100);

    position: fixed;
    bottom: 0;
  }
`;

const Button = styled.button<{
  $currentTapValue: number;
  $tapValue: number;
}>`
  border-top: 2px solid ${(props) => (props.$currentTapValue === props.$tapValue ? 'var(--mint6)' : 'transparent')};

  padding: 16px 0;
`;
