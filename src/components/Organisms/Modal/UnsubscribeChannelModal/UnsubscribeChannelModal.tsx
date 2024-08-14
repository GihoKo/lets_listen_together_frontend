// hooks
import useUnsubscribeChannelModal from './UnsubscribeChannelModal.hook';

// components
import Button from '@/components/Atoms/Modal/Button/Button';
import Dimmed from '@/components/Atoms/Modal/Dimmed';
import { ButtonWrapper, Description, ErrorMessage, Title, Wrapper } from '@/components/Atoms/Modal/StyledComponents';

export default function UnSubscribeChannelModal() {
  const logics = useUnsubscribeChannelModal();

  if (!logics) return null;

  const { errorMessages, handleUnSubscribeButtonClick, handleModalCloseButtonClick } = logics;

  return (
    <Dimmed>
      <Wrapper>
        <Title>채널 구독 해제</Title>
        <Description>이 채널을 구독 해제 하시겠습니까?</Description>
        {errorMessages ? <ErrorMessage>{errorMessages}</ErrorMessage> : null}
        <ButtonWrapper>
          <Button type='submit' variant='confirm' onClick={handleUnSubscribeButtonClick}>
            해제하기
          </Button>
          <Button type='button' variant='close' onClick={handleModalCloseButtonClick}>
            닫기
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </Dimmed>
  );
}
