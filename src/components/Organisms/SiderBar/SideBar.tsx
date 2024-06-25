import styled from 'styled-components';
import ChannelContainer from '../../Molcules/SideBar/ChannelContainer';
import CreateChannelButton from '../../Molcules/SideBar/CreateChannelButton';
import SideBarToggleButton from '../../Molcules/SideBar/SideBarToggleButton';
import useSideBar from './SideBar.hook';
import useModalStore from '../../../../store/useModalStore';
import CreateChannelModal from '../Modal/CreateChannelModal';

export default function SideBar() {
  const { isOpen, handleToggleButtonClick } = useSideBar();
  const { openModal, isOpen: isModalOpen } = useModalStore();

  const handleOpenModal = () => {
    openModal('CREATE_CHANNEL');
  };

  return (
    <Wrapper $isOpen={isOpen}>
      {isModalOpen ? <CreateChannelModal /> : null}
      <Header>
        <SideBarToggleButton onClick={handleToggleButtonClick} isOpen={isOpen} />
        <CreateChannelButton isOpen={isOpen} onClick={handleOpenModal} />
      </Header>
      <TitleText $isOpen={isOpen}>채널</TitleText>
      <ChannelContainer isOpen={isOpen} />
    </Wrapper>
  );
}

const Wrapper = styled.div<{
  $isOpen: boolean;
}>`
  width: ${(props) => (props.$isOpen ? '240px' : '72px')};
  height: 100vh;

  padding: 0 12px;
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

const TitleText = styled.div<{
  $isOpen: boolean;
}>`
  font-size: 20px;
  margin: 12px 0;
  white-space: nowrap;

  color: ${(props) => (props.$isOpen ? 'black' : 'transparent')};

  cursor: default;
`;
