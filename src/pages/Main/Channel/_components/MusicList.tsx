import styled from 'styled-components';
import MusicContainer from './MusicContainer';
import { Music } from '../_types/interface';
import addSquareSvg from '../../../../images/svg/add-square.svg';
import useModalStore from '../../../../store/useModalStore';
import CreateMusicModal from '../../../../components/Organisms/Modal/CreateMusicModal';
import { useParams } from 'react-router-dom';
import { ModalType } from '../../../../types/enum';

interface MusicListProps {
  data: Music[];
}

export default function MusicList({ data }: MusicListProps) {
  const { openModal } = useModalStore();
  const { channelId } = useParams<{ channelId: string }>();

  const handleCreateMusicButtonButtonClick = () => {
    openModal(ModalType.CREATE_MUSIC, <CreateMusicModal />, { channelId });
  };

  return (
    <Wrapper>
      <Header>
        <Title>Music List</Title>
        <CreateMusicButton onClick={handleCreateMusicButtonButtonClick}>
          <img src={addSquareSvg} alt='음악 생성 버튼 이미지' />
        </CreateMusicButton>
      </Header>
      <MusicContainer data={data} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 12px;
  width: 100%;
  height: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  background-color: var(--grey-grey150);
  padding: 16px 32px;
`;

const Header = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 24px;
  color: var(--grey-grey600);
`;

const CreateMusicButton = styled.button`
  width: 48px;
  height: 48px;

  transition: all 0.3s;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;

    cursor: pointer;
  }

  &:hover {
    transform: scale(1.2);
  }
`;
