import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  padding: 32px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

export const Input = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  width: 100%;

  padding: 8px;
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
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 16px;
  color: #4f4f4f;
  margin-top: 8px;
`;
