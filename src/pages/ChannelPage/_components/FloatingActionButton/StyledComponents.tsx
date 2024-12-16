import styled from 'styled-components';

export const ButtonBluePrint = styled.button`
  flex-shrink: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--mint7);
  box-shadow: 0 0 10px var(--mint7);

  transition: all 0.3s;

  cursor: pointer;

  z-index: 9999;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
