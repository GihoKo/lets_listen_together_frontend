import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'confirm' | 'close';
  onClick?: () => void;
  type: 'button' | 'submit';
}

export default function Button({ children, variant, onClick, type }: ButtonProps) {
  return (
    <Wrapper type={type} $variant={variant} onClick={onClick}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button<{
  $variant: 'confirm' | 'close';
}>`
  width: 100%;

  padding: 16px 0;
  border: none;
  background-color: ${({ $variant }) => ($variant === 'confirm' ? 'RGB(62,62,62)' : 'RGB(255,255,255)')};
  color: ${({ $variant }) => ($variant === 'confirm' ? 'RGB(255,255,255)' : 'RGB(62,62,62)')};
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;
`;
