import styled from 'styled-components';
import MusicContainer from './MusicContainer';
import useModalStore from '../../../../../store/useModalStore';
import { Music } from '../_types/interface';

interface MusicListProps {
  data: Music[];
  selectMusic: (music: Music) => void;
}

export default function MusicList({ data, selectMusic }: MusicListProps) {
  const { openModal } = useModalStore();

  const handleOpenModalButtonClick = () => {
    openModal('CREATE_MUSIC');
  };

  return (
    <Wrapper>
      <Header>
        <Title>Music List</Title>
        <CreateMusicButton onClick={handleOpenModalButtonClick}>+</CreateMusicButton>
      </Header>
      <MusicContainer data={data} selectMusic={selectMusic} />
      <ScrollUpButton>위로</ScrollUpButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding: 0 64px;
`;

const Header = styled.div`
  border-bottom: 1px solid #000;
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 8px;
`;

const Title = styled.div`
  font-size: 20px;
`;

const CreateMusicButton = styled.button`
  border: 1px solid #000;
  border-radius: 8px;
  width: 36px;
  height: 36px;

  cursor: pointer;
`;

const ScrollUpButton = styled.button`
  border: 1px solid #000;
  border-radius: 8px;
  width: 48px;
  height: 48px;

  cursor: pointer;
`;
