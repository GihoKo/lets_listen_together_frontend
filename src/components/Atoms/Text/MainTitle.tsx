// libraries
import styled from 'styled-components';

// types
import MainTitleProps from './MainTitle.type';

export default function MainTitle({ children }: MainTitleProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.h1`
  border-bottom: 2px solid var(--grey-grey300);

  font-size: 56px;
  font-weight: bold;
  padding-bottom: 24px;

  @media (max-width: 1024px) {
    font-size: 32px;
    padding-bottom: 16px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    padding-bottom: 12px;
  }
`;
