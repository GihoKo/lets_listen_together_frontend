import styled from 'styled-components';
import MusicContainer from './MusicContainer';
import { Music } from '../_types/interface';
import addSquareSvg from '../../../../images/svg/add-square.svg';
import useModalStore from '../../../../store/useModalStore';
import CreateMusicModal from '../../../../components/Organisms/Modal/CreateMusicModal';
import { useParams } from 'react-router-dom';
import { ModalType } from '../../../../types/enum';
import Guide from '../../../../components/Atoms/Badge/Guide';

interface MusicListProps {
  musicList: Music[];
}

export default function MusicList({ musicList }: MusicListProps) {
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
        {musicList.length === 0 ? (
          <GuidePositioner>
            <Guide>{`Add Music!`}</Guide>
          </GuidePositioner>
        ) : null}
      </Header>
      <MusicContainer musicList={musicList} />
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

  @media (max-width: 768px) {
    border-radius: 0;
    width: 100vw;
    height: auto;

    gap: 0px;

    padding: 0 16px 8px 16px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
`;

const Title = styled.div`
  font-size: 24px;
  color: var(--grey-grey600);

  @media (max-width: 768px) {
    font-size: 20px;
  }
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

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const GuidePositioner = styled.div`
  position: absolute;
  right: 48px;
`;
