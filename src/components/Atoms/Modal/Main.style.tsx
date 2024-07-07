import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid var(--grey-grey150);
  width: 560px;
  padding: 32px;
  background-color: var(--grey-grey100);
  border-radius: 16px;
  box-shadow: 0 0 10px var(--grey-grey150);

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.div`
  font-size: 24px;
  color: var(--grey-grey900);
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: var(--grey-grey600);
`;

export const Input = styled.input`
  border-radius: 8px;
  border: none;
  width: 100%;
  outline: none;

  padding: 16px;
  background-color: var(--grey-grey150);
  font-size: 16px;

  &:focus {
    border: 1px solid var(--mint5);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:focus-within {
    label {
      color: var(--mint5);
    }
  }
`;

export const Description = styled.div`
  font-size: 16px;
  color: var(--grey-grey600);
  margin-top: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  margin-top: 24px;
`;
