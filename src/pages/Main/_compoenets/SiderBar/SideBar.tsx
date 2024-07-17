// libraries
import styled from 'styled-components';

// hooks
import useSideBar from './SideBar.hook';

// components
import CreateChannelModal from '@/components/Organisms/Modal/CreateChannelModal';
import SideBarToggleButton from './SideBarToggleButton';
import CreateChannelButton from './CreateChannelButton';
import CategoryName from './CategoryName';
import NavigatorContainer from './NavigatorContainer';
import ChannelContainer from './ChannelContainer';

export default function SideBar() {
  // logics
  const {
    isOpen,
    handleSideBarToggleButtonClick,
    isModalOpen,
    handleCreateChannelModalOpenButtonClick,
    handleSideBarCloseButtonClick,
  } = useSideBar();

  // view
  return (
    <Dimmed $isOpen={isOpen} onClick={handleSideBarCloseButtonClick}>
      <BackGround>
        <Wrapper $isOpen={isOpen}>
          {isModalOpen ? <CreateChannelModal /> : null}
          <Header>
            <SideBarToggleButton onClick={handleSideBarToggleButtonClick} isOpen={isOpen} />
            <CreateChannelButton isOpen={isOpen} onClick={handleCreateChannelModalOpenButtonClick} />
          </Header>
          <CategoryName isOpen={isOpen}>Navigator</CategoryName>
          <NavigatorContainer isOpen={isOpen} />
          <CategoryName isOpen={isOpen}>Channels</CategoryName>
          <ChannelContainer isOpen={isOpen} />
        </Wrapper>
      </BackGround>
    </Dimmed>
  );
}

const Dimmed = styled.div<{
  $isOpen: boolean;
}>`
  width: 100vh;
  height: 100vh;

  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);

  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
`;

const BackGround = styled.nav`
  height: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 24px;

  @media (max-width: 768px) {
    height: 100vh;

    padding-left: 0;

    position: absolute;
  }
`;

const Wrapper = styled.div<{
  $isOpen: boolean;
}>`
  border-radius: 12px;
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
