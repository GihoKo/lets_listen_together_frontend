import styled from 'styled-components';

interface DimmedProps {
  children: React.ReactNode;
}

export default function Dimmed({ children }: DimmedProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  position: fixed;
  z-index: 9998;
  inset: 0;
`;
