import styled, { keyframes } from 'styled-components';

export default function ComponentSpinner() {
  return <Wrapper />;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Wrapper = styled.div`
  border: 16px solid var(--grey-grey990);
  border-top: 16px solid var(--mint5);
  border-radius: 50%;
  width: 120px;
  height: 120px;

  animation: ${spin} 2s linear infinite;

  @media (max-width: 1024px) {
    border: 12px solid var(--grey-grey990);
    border-top: 12px solid var(--mint5);
    width: 80px;
    height: 80px;
  }

  @media (max-width: 768px) {
    border: 8px solid var(--grey-grey990);
    border-top: 8px solid var(--mint5);
    width: 60px;
    height: 60px;
  }
`;
