// libraries
import styled from 'styled-components';

// hooks
import useStartButton from './StartButton.hook';

export default function StartButton() {
  // logics
  const { handleClick } = useStartButton();

  // view
  return (
    <Button onClick={handleClick} type='button'>
      Start!
    </Button>
  );
}

const Button = styled.button`
  border: 2px solid var(--mint7);
  border-radius: 16px;

  padding: 8px 16px;
  background-color: var(--mint4);
  color: var(--mint8);
  font-weight: 700;
  font-size: 16px;
  box-shadow: 0 0 10px 0 var(--mint4);

  cursor: pointer;

  margin-top: 24px;

  &:hover {
    background-color: var(--mint5);
  }
`;
