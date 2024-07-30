// libraries
import styled from 'styled-components';

// hooks
import useModalStore from '@/store/useModalStore';

// components
import SubscribeChannelModal from '@/components/Organisms/Modal/SubscribeChannelModal';

// images
import subscribeOffSvg from '@/images/svg/subscribe-off.svg';
import subscribeOnSvg from '@/images/svg/subscribe-on.svg';

// types
import { ModalType } from '@/types/enum';
import useGetChannelById from '@/apis/hooks/useGetChannelById';
import { useUserStore } from '@/store/useUserStore';
import { useEffect, useState } from 'react';

interface SubscribeButtonProps {
  channelId: string | undefined;
}

export default function SubscribeButton({ channelId }: SubscribeButtonProps) {
  // logics
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { openModal } = useModalStore();
  const { data: channel, isLoading: isChannelLoading, isError: isChannelError } = useGetChannelById(channelId);
  const { user } = useUserStore.getState();
  const userId = user?.id;

  const handleSubscribeButtonClick = () => {
    openModal(ModalType.SUBSCRBE_CHANNEL, <SubscribeChannelModal />, { channelId });
  };

  const handleUnsubscribeButtonClick = () => {
    openModal(ModalType.UNSUBSCRIBE_CHANNEL, <SubscribeChannelModal />, { channelId });
  };

  const checkIsSubscribed = () => {
    if (channel?.users.some((user) => user.id === userId)) {
      setIsSubscribed(true);
    } else {
      setIsSubscribed(false);
    }
  };

  useEffect(() => {
    checkIsSubscribed();
  }, [isSubscribed, channel]);

  // view

  if (isChannelLoading) {
    return null;
  }

  if (isChannelError) {
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
