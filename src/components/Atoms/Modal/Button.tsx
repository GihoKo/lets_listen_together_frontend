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
  border: none;
  border-radius: 16px;

  padding: 16px 32px;
  background-color: ${({ $variant }) =>
    $variant === 'confirm' ? 'var(--yellow-galaxyYellowDark2)' : 'var(--grey-grey150)'};
  color: ${({ $variant }) => ($variant === 'confirm' ? 'var(--grey-grey150)' : 'var(--grey-grey900)')};
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === 'confirm' ? 'var(--yellow-galaxyYellowDark1)' : 'var(--grey-grey250)'};
  }
`;
