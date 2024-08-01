// hooks
import useUnsubscribeChannelModal from './UnsubscribeChannelModal.hook';

// components
import Button from '@/components/Atoms/Modal/Button';
import Dimmed from '@/components/Atoms/Modal/Dimmed';
import { ButtonWrapper, Description, ErrorMessage, Title, Wrapper } from '@/components/Atoms/Modal/StyledComponents';
import Loading from '@/components/Molecules/Loading';

export default function UnSubscribeChannelModal() {
  const logics = useUnsubscribeChannelModal();

  if (!logics) return null;

  const { isPending, errorMessages, handleUnSubscribeButtonClick, handleModalCloseButtonClick } = logics;

  if (isPending) {
    return <Loading />;
  }

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
