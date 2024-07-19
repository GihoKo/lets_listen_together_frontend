// libraries
import styled from 'styled-components';

// hooks
import useSideBar from './SideBar.hook';

// components
import SideBarToggleButton from './SideBarToggleButton';
import CreateChannelButton from './CreateChannelButton';
import CategoryName from './CategoryName';
import NavigatorContainer from './NavigatorContainer';
import ChannelContainer from './ChannelContainer';

export default function SideBar() {
  // logics
  const { isOpen, handleToggle, handleCreateChannelModalOpenButtonClick, handleClose } = useSideBar();

  // view
  return (
    <>
      <BackGround>
        <Wrapper $isOpen={isOpen}>
          <Header>
            <SideBarToggleButton onClick={handleToggle} isOpen={isOpen} />
            <CreateChannelButton isOpen={isOpen} onClick={handleCreateChannelModalOpenButtonClick} />
          </Header>
          <CategoryName isOpen={isOpen}>Navigator</CategoryName>
          <NavigatorContainer isOpen={isOpen} />
          <CategoryName isOpen={isOpen}>Channels</CategoryName>
          <ChannelContainer isOpen={isOpen} />
        </Wrapper>
      </BackGround>
      <Dimmed $isOpen={isOpen} onClick={handleClose} />
    </>
  );
}

const BackGround = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 24px;
  padding-bottom: 24px;

  @media (max-width: 768px) {
    height: 100%;

    padding-left: 0;

    position: absolute;
    bottom: 0;
    z-index: 100;
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
