// components
import Button from '@/components/Atoms/Modal/Button/Button';
import Dimmed from '@/components/Atoms/Modal/Dimmed';
import { ButtonWrapper, Description, ErrorMessage, Title, Wrapper } from '@/components/Atoms/Modal/StyledComponents';

// hooks
import useSubscribeChannelModal from './SubscribeChannelModal.hook';

export default function SubscribeChannelModal() {
  const logics = useSubscribeChannelModal();

  if (!logics) return null;

  const { errorMessages, handleSubscribeButtonClick, handleModalCloseButtonClick } = logics;

  return (
    <Dimmed>
      <Wrapper>
        <Title>채널 구독</Title>
        <Description>이 채널을 구독하시겠습니까?</Description>
        {errorMessages ? <ErrorMessage>{errorMessages}</ErrorMessage> : null}
        <ButtonWrapper>
          <Button type='submit' variant='confirm' onClick={handleSubscribeButtonClick}>
            구독하기
          </Button>
          <Button type='button' variant='close' onClick={handleModalCloseButtonClick}>
            닫기
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </Dimmed>
  );
}
