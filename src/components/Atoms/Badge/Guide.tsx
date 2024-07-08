import styled from 'styled-components';

interface GuideProps {
  children: string;
}

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
`;
