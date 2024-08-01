// components
import Button from '@/components/Atoms/Modal/Button';
import Dimmed from '@/components/Atoms/Modal/Dimmed';
import { ButtonWrapper, Description, Title, Wrapper } from '@/components/Atoms/Modal/StyledComponents';

// hooks
import useSubscribeChannelModal from './SubscribeChannelModal.hook';

// components
import Loading from '@/components/Molecules/Loading';
import Error from '@/components/Molecules/Error';
import { useEffect } from 'react';

export default function SubscribeChannelModal() {
  const logics = useSubscribeChannelModal();

  if (!logics) return null;

  const { isPending, isError, handleSubscribeButtonClick, handleModalCloseButtonClick } = logics;

  useEffect(() => {
    console.log('isPending:', isPending);
  }, [isPending]);

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Dimmed>
      <Wrapper>
        <Title>채널 구독</Title>
        <Description>이 채널을 구독하시겠습니까?</Description>
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
