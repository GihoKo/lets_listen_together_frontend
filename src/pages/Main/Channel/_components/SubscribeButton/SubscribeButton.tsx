// libraries
import styled from 'styled-components';

// hooks
import useSubscribeButton from './SubscribeButton.hook';

// images
import subscribeOffSvg from '@/images/svg/subscribe-off.svg';
import subscribeOnSvg from '@/images/svg/subscribe-on.svg';

// types
import { SubscribeButtonProps } from './SubscribeButton.type';

export default function SubscribeButton({ channelId }: SubscribeButtonProps) {
  // logics

  const {
    isOwnChannel,
    isSubscribed,
    isChannelLoading,
    isChannelError,
    handleSubscribeButtonClick,
    handleUnsubscribeButtonClick,
  } = useSubscribeButton({ channelId });

  // view
  if (isChannelLoading) {
    return null;
  }

  if (isChannelError) {
    return null;
  }

  if (isOwnChannel) {
    return null;
  }

  return (
    <SubScribeButton type='button' onClick={isSubscribed ? handleUnsubscribeButtonClick : handleSubscribeButtonClick}>
      <img src={isSubscribed ? subscribeOnSvg : subscribeOffSvg} alt='구독 버튼 이미지' />
    </SubScribeButton>
  );
}

const SubScribeButton = styled.button`
  flex-shrink: 0;
  width: 48px;
  height: 48px;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;

    cursor: pointer;
  }

  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
