import styled from 'styled-components';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

interface QueryErrorBoundaryProps {
  children: React.ReactNode;
}

export default function QueryErrorBoundary({ children }: QueryErrorBoundaryProps) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ error, resetErrorBoundary }) => (
        <Wrapper role='alert'>
          <ErrorMessage>{error.message}</ErrorMessage>
          <ResetComponentButton onClick={resetErrorBoundary}>재시도</ResetComponentButton>
        </Wrapper>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}

const Wrapper = styled.div`
  border-radius: 24px;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: 'transparent';
  font-size: 24px;
  font-weight: bold;
  color: var(--grey-grey300);
  padding: 24px;

  @media (max-width: 1024px) {
    font-size: 20px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 16px;
  }
`;

const ResetComponentButton = styled.button`
  border-radius: 12px;

  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  background-color: var(--mint6);
  color: var(--grey-grey100);

  margin-top: 24px;

  &:hover {
    background-color: var(--mint7);
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 10px 20px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 16px;
  }
`;

const ErrorMessage = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--grey-grey300);
`;
