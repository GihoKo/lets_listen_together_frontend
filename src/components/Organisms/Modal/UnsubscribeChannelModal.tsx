// hooks
import useUnsubscribeChannelModal from './UnsubscribeChannelModal.hook';

// components
import Button from '@/components/Atoms/Modal/Button';
import Dimmed from '@/components/Atoms/Modal/Dimmed';
import { ButtonWrapper, Description, Title, Wrapper } from '@/components/Atoms/Modal/StyledComponents';
import Error from '@/components/Molecules/Error';
import Loading from '@/components/Molecules/Loading';

export default function UnSubscribeChannelModal() {
  const logics = useUnsubscribeChannelModal();

  if (!logics) return null;

  const { isPending, isError, handleUnSubscribeButtonClick, handleModalCloseButtonClick } = logics;

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Dimmed>
      <Wrapper>
        <Title>채널 구독 해제</Title>
        <Description>이 채널을 구독 해제 하시겠습니까?</Description>
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
