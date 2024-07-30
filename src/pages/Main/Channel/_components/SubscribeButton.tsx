// libraries
import styled from 'styled-components';

// hooks
import { useState } from 'react';

// images
import subscribeOffSvg from '@/images/svg/subscribe-off.svg';
import subscribeOnSvg from '@/images/svg/subscribe-on.svg';

export default function SubscribeButton() {
  // logics
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribeButtonClick = () => {
    setIsSubscribed((prev) => !prev);
  };

  // view
  return (
    <SubScribeButton type='button' onClick={handleSubscribeButtonClick}>
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
