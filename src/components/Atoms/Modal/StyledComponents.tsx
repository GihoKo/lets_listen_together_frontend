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

  @media (max-width: 768px) {
    width: 100%;

    gap: 8px;

    padding: 16px;
  }
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
  border: 1px solid var(--grey-grey150);
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

export const TagContainer = styled.div`
  display: flex;
  gap: 8px;

  overflow-x: hidden;
`;

export const Tag = styled.div`
  border: 1px solid var(--mint3);
  border-radius: 8px;

  background-color: var(--mint8);
  padding: 8px;
  color: var(--grey-grey900);
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;

  margin-right: 8px;

  cursor: pointer;

  &:hover {
    background-color: var(--mint7);
  }
`;

export const ChannelImageWrapper = styled.button`
  border-radius: 16px;
  width: 120px;
  height: 120px;

  overflow: hidden;
  padding: 0;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const EmptyImage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--grey-grey600);
  background-color: var(--grey-grey150);

  cursor: pointer;

  &:hover {
    background-color: var(--grey-grey200);
  }
`;

export const ChannelImageLabel = styled(Label)``;

export const FileInput = styled.input`
  display: none;
`;

export const ErrorMessage = styled.p`
  color: var(--red-errorMessage-dark);
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
