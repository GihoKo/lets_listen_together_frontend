// libraries
import styled from 'styled-components';

// types
import { DimmedProps } from './Dimmed.type';

export default function Dimmed({ children }: DimmedProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);

  position: fixed;
  z-index: 9998;
  inset: 0;
`;
