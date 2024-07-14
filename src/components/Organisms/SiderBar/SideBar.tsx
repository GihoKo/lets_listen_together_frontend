// libraries
import styled from 'styled-components';

// hooks
import useSideBar from './SideBar.hook';

// components
import CreateChannelModal from '../Modal/CreateChannelModal';
import CategoryName from '../../Atoms/SideBar/CategoryName';
import SideBarToggleButton from '../../Molecules/SideBar/SideBarToggleButton';
import CreateChannelButton from '../../Molecules/SideBar/CreateChannelButton';
import NavigatorContainer from '../../Molecules/SideBar/NavigatorContainer';
import ChannelContainer from '../../Molecules/SideBar/ChannelContainer';

export default function SideBar() {
  // logics
  const { isOpen, handleSideBarToggleButtonClick, isModalOpen, handleCreateChannelModalOpenButtonClick } = useSideBar();

  // view
  return (
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
  );
}

const BackGround = styled.nav`
  height: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 24px;
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
`;

const Header = styled.header`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 8px;
`;
