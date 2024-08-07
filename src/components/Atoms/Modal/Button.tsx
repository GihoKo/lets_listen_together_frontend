// libraries
import styled from 'styled-components';

// types
import { ButtonProps } from './Button.type';

export default function Button({ children, variant, onClick, type }: ButtonProps) {
  // view
  return (
    <Wrapper type={type} $variant={variant} onClick={onClick}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button<{
  $variant: 'confirm' | 'close';
}>`
  border: none;
  border-radius: 16px;

  padding: 16px 32px;
  background-color: ${({ $variant }) => ($variant === 'confirm' ? 'var(--mint6)' : 'var(--grey-grey150)')};
  color: ${({ $variant }) => ($variant === 'confirm' ? 'var(--grey-grey150)' : 'var(--grey-grey900)')};
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    background-color: ${({ $variant }) => ($variant === 'confirm' ? 'var(--mint7)' : 'var(--grey-grey250)')};
  }
`;
