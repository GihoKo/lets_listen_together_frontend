// libraries
import styled from 'styled-components';

// types
import { CategoryNameProps } from './CategoryName.type';

export default function CategoryName({ children, isOpen }: CategoryNameProps) {
  // view
  return <Wrapper $isOpen={isOpen}>{children}</Wrapper>;
}

const Wrapper = styled.span<{
  $isOpen: boolean;
}>`
  display: flex;
  justify-content: ${(props) => (props.$isOpen ? 'flex-start' : 'center')};

  font-size: ${(props) => (props.$isOpen ? '20px' : '11px')};
  margin: 12px 0;
  white-space: nowrap;

  color: var(--grey-grey600);

  cursor: default;

  @media (max-width: 1024px) {
    display: none;
  }
`;
