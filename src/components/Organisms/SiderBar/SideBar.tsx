import styled from 'styled-components';
import ChannelContainer from '../../Molcules/SideBar/ChannelContainer';
import CreateChannelButton from '../../Molcules/SideBar/CreateChannelButton';
import SideBarToggleButton from '../../Molcules/SideBar/SideBarToggleButton';
import useSideBar from './SideBar.hook';
import CreateChannelModal from '../Modal/CreateChannelModal';
import useModalStore from '../../../store/useModalStore';
import { ModalType } from '../../../types/enum';
import NavigatorContainer from '../../Molcules/SideBar/NavigatorContainer';

export default function SideBar() {
  const { isOpen, handleToggleButtonClick } = useSideBar();
  const { openModal, isOpen: isModalOpen } = useModalStore();

  const handleCreateChannelButtonClick = () => {
    openModal(ModalType.CREATE_CHANNEL, <CreateChannelModal />);
  };

  return (
    <NavBar>
      <Wrapper $isOpen={isOpen}>
        {isModalOpen ? <CreateChannelModal /> : null}
        <Header>
          <SideBarToggleButton onClick={handleToggleButtonClick} isOpen={isOpen} />
          <CreateChannelButton isOpen={isOpen} onClick={handleCreateChannelButtonClick} />
        </Header>
        <CartegoryName $isOpen={isOpen}>Navigator</CartegoryName>
        <NavigatorContainer isOpen={isOpen} />
        <CartegoryName $isOpen={isOpen}>Channels</CartegoryName>
        <ChannelContainer isOpen={isOpen} />
      </Wrapper>
    </NavBar>
  );
}

const NavBar = styled.nav`
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
`;

const Header = styled.div`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 8px;
`;

const CartegoryName = styled.div<{
  $isOpen: boolean;
}>`
  display: flex;
  justify-content: ${(props) => (props.$isOpen ? 'flex-start' : 'center')};

  font-size: ${(props) => (props.$isOpen ? '20px' : '11px')};
  margin: 12px 0;
  white-space: nowrap;

  color: var(--grey-grey600);

  cursor: default;
`;
