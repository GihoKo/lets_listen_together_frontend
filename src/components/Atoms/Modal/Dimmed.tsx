// libraries
import styled from 'styled-components';

// hooks

// types
import { DimmedProps } from './Dimmed.type';
import useDimmed from './Dimmed.hook';

export default function Dimmed({ children }: DimmedProps) {
  const { handleModalClose } = useDimmed();

  return <Wrapper onClick={handleModalClose}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);

  position: fixed;
  z-index: 1000;
  inset: 0;
`;
