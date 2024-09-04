// libraries
import styled from 'styled-components';
import { lazy, Suspense } from 'react';

// hooks
import useSideBar from './SideBar.hook';

// components
import SideBarToggleButton from './SideBarToggleButton/SideBarToggleButton';
import CreateChannelButton from './CreateChannelButton/CreateChannelButton';
import Category from './Category/Category';
import NavigatorContainer from './NavigatorContainer/NavigatorContainer';
import QueryErrorBoundary from '@/components/Molecules/QueryErrorBoundary/QueryErrorBoundary';

const MyChannelsContainer = lazy(() => import('./MyChannels/MyChannelsContainer'));
const SubscribedChannelsContainer = lazy(() => import('./SubscribedChannels/SubscribedChannelsContainer'));

// types
import { Music } from '@/types/music';
import ChannelFallback from './Channel/ChannelFallback';

export default function SideBar() {
  // logics
  const { isOpen, currentMusic, handleToggle, handleClose } = useSideBar();

  // view

  return (
    <>
      <BackGround $currentMusic={currentMusic}>
        <Wrapper $isOpen={isOpen}>
          <Header>
            <SideBarToggleButton onClick={handleToggle} isOpen={isOpen} />
            <CreateChannelButton isOpen={isOpen} />
          </Header>

          <Category isOpen={isOpen}>Navigator</Category>
          <NavigatorContainer isOpen={isOpen} />

          <Category isOpen={isOpen}>MyChannels</Category>
          <QueryErrorBoundary>
            <Suspense fallback={<ChannelFallback />}>
              <MyChannelsContainer isOpen={isOpen} />
            </Suspense>
          </QueryErrorBoundary>

          <Category isOpen={isOpen}>Subscribed</Category>
          <QueryErrorBoundary>
            <Suspense fallback={<ChannelFallback />}>
              <SubscribedChannelsContainer isOpen={isOpen} />
            </Suspense>
          </QueryErrorBoundary>
        </Wrapper>
      </BackGround>
      <Dimmed $isOpen={isOpen} onClick={handleClose} />
    </>
  );
}

const BackGround = styled.nav<{
  $currentMusic: Music | null;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 24px 24px;
  padding-bottom: ${(props) => (props.$currentMusic ? '128px' : '24px')};

  @media (max-width: 768px) {
    height: 100%;

    padding: 0;

    position: fixed;
    top: 0;
    z-index: 1000;
  }
`;

const Wrapper = styled.div<{
  $isOpen: boolean;
}>`
  border-radius: 12px;
  border: 1px solid var(--grey-grey300);
  width: ${(props) => (props.$isOpen ? '240px' : '72px')};
  flex-grow: 1;

  padding: 0 12px;
  background-color: var(--grey-grey150);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  transition: width 0.3s;

  @media (max-width: 1024px) {
    width: 72px;
  }

  @media (max-width: 768px) {
    border-radius: 0;
    width: ${(props) => (props.$isOpen ? '240px' : '0')};
    padding: 0;
  }
`;

const Header = styled.header`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 8px;
`;

const Dimmed = styled.div<{
  $isOpen: boolean;
}>`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};

    background-color: rgba(0, 0, 0, 0.5);

    position: absolute;
    inset: 0;
    z-index: 10;
  }
`;
