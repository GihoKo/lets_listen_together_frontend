import styled from 'styled-components';
import ChannelContainer from '../../Molcules/SideBar/ChannelContainer';
import CreateChannelButton from '../../Molcules/SideBar/CreateChannelButton';
import SideBarToggleButton from '../../Molcules/SideBar/SideBarToggleButton';
import useSideBar from './SideBar.hook';
import useModalStore from '../../../../store/useModalStore';
import CreateChannelModal from './../../Modal/CreateChannelModal';

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
        <SideBarToggleButton onClick={handleToggleButtonClick} />
        <CreateChannelButton isOpen={isOpen} onClick={handleOpenModal} />
      </Header>
      <TitleText $isOpen={isOpen}>MyChannel</TitleText>
      <ChannelContainer isOpen={isOpen} />
    </Wrapper>
  );
}

const Wrapper = styled.div<{
  $isOpen: boolean;
}>`
  border-right: 1px solid black;

  width: ${(props) => (props.$isOpen ? '240px' : '64px')};
  height: 100vh;
  padding: 0 12px;

  transition: width 0.3s;
`;

const Header = styled.div`
  height: 56px;
  display: flex;
  justify-content: space-between;

  padding: 0 8px;

  margin-top: 18px;
`;

const TitleText = styled.div<{
  $isOpen: boolean;
}>`
  font-size: 24px;
  margin: 12px 0;

  color: ${(props) => (props.$isOpen ? 'black' : 'transparent')};

  cursor: default;
`;
