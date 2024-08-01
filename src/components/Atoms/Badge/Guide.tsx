// libraries
import styled from 'styled-components';

// types
import { GuideProps } from './Guide.type';

export default function Guide({ children }: GuideProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  border: 2px solid var(--mint5);
  border-radius: 12px;
  padding: 8px 16px;

  font-size: 16px;
  color: var(--mint5);
  font-weight: bold;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 6px 12px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 8px;
  }
`;
