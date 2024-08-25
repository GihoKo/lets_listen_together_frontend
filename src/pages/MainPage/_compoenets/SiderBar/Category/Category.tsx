// libraries
import styled from 'styled-components';

// types
import { CategoryProps } from './Category.type';

export default function Category({ children, isOpen }: CategoryProps) {
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

  @media (max-width: 768px) {
    display: flex;

    padding-left: 16px;
    font-size: 16px;
    margin: 0;
    margin-top: 8px;
  }
`;
