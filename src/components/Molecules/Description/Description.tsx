// libraries
import styled from 'styled-components';

// types
import { DescriptionProps } from './Description.type';

export default function Description({ title, text }: DescriptionProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 16px;
  border: 1px solid var(--grey-grey300);
  width: 320px;
  height: 160px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 32px;
  background-color: var(--grey-grey150);

  @media (max-width: 992px) {
    width: 400px;
    height: auto;

    padding: 16px;
    padding-bottom: 32px;
  }

  @media (max-width: 768px) {
    width: 100%;

    padding: 16px;
    padding-bottom: 32px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  color: var(--grey-grey900);
`;

const Text = styled.span`
  font-size: 16px;

  color: var(--grey-grey600);
`;
