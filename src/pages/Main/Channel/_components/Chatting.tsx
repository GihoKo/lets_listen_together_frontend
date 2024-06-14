import styled from 'styled-components';
import ChattingContainer from './ChattingContainer';

export default function Chatting() {
  // 채팅

  return (
    <Wrapper>
      <Header>
        <Title>Chatting</Title>
      </Header>
      <ChattingContainer />
      <InputWrapper>
        <Input type='text' />
        <SendButton>+</SendButton>
      </InputWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding: 0 64px;
`;

const Header = styled.div`
  border-bottom: 1px solid #000;
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 8px;
`;

const Title = styled.div`
  font-size: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;

  position: relative;
`;

const Input = styled.input`
  border: 1px solid #000;
  border-radius: 12px;
  outline: none;
  width: 100%;
  height: 48px;

  padding: 16px 40px 16px 8px;

  font-size: 16px;
`;

const SendButton = styled.button`
  border-radius: 8px;
  width: 24px;
  height: 24px;

  position: absolute;
  top: 12px;
  right: 6px;

  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
