// libraries
import styled from 'styled-components';

// hooks
import useSideBar from './SideBar.hook';

// components
import SideBarToggleButton from './SideBarToggleButton/SideBarToggleButton';
import CreateChannelButton from './CreateChannelButton/CreateChannelButton';
import CategoryName from './Category/CategoryName';
import NavigatorContainer from './Navigator/NavigatorContainer';
import QueryErrorBoundary from '@/components/Molecules/QueryErrorBoundary';
import { Suspense } from 'react';
import ComponentFallBack from '@/components/Molecules/ComponentFallBack';
import MyChannelsContainer from './MyChannels/MyChannelsContainer';
import SubscribedChannelsContainer from './SubscribedChannels/SubscribedChannelsContainer';

// types
import { Music } from '@/types/music';

export default function SideBar() {
  // logics
  const { isOpen, currentMusic, handleToggle, handleCreateChannelModalOpenButtonClick, handleClose } = useSideBar();

  // view

  return (
    <>
      <BackGround $currentMusic={currentMusic}>
        <Wrapper $isOpen={isOpen}>
          <Header>
            <SideBarToggleButton onClick={handleToggle} isOpen={isOpen} />
            <CreateChannelButton isOpen={isOpen} onClick={handleCreateChannelModalOpenButtonClick} />
          </Header>

          <CategoryName isOpen={isOpen}>Navigator</CategoryName>
          <NavigatorContainer isOpen={isOpen} />

          <CategoryName isOpen={isOpen}>MyChannels</CategoryName>
          <QueryErrorBoundary>
            <Suspense fallback={<ComponentFallBack />}>
              <MyChannelsContainer isOpen={isOpen} />
            </Suspense>
          </QueryErrorBoundary>

          <CategoryName isOpen={isOpen}>Subscribed</CategoryName>
          <QueryErrorBoundary>
            <Suspense fallback={<ComponentFallBack />}>
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

    position: absolute;
    bottom: 0;
    z-index: 100;
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
