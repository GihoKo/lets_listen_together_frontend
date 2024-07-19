import styled from 'styled-components';
import MusicContainer from './MusicContainer';
import { Music } from '@/types/music';
import addSquareSvg from '../../../../images/svg/add-square.svg';
import useModalStore from '../../../../store/useModalStore';
import CreateMusicModal from '../../../../components/Organisms/Modal/CreateMusicModal';
import { useParams } from 'react-router-dom';
import { ModalType } from '../../../../types/enum';
import Guide from '../../../../components/Atoms/Badge/Guide';
import { useState } from 'react';
import useUpdateMusicOrder from '@/apis/hooks/useUpdateMusicListOrder';

interface MusicListProps {
  musicList: Music[];
  setMusicList: React.Dispatch<React.SetStateAction<Music[]>>;
}

export default function MusicList({ musicList, setMusicList }: MusicListProps) {
  const { openModal } = useModalStore();
  const { channelId } = useParams<{ channelId: string }>();
  const uploadUpdateMusicOrder = useUpdateMusicOrder();

  const handleCreateMusicButtonButtonClick = () => {
    openModal(ModalType.CREATE_MUSIC, <CreateMusicModal />, { channelId, order: musicList.length });
  };

  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditMode(true);
  };

  const handleEditConfirmButtonClick = () => {
    uploadUpdateMusicOrder.mutate({ musicList });
    setIsEditMode(false);
  };

  return (
    <Wrapper>
      <Header>
        <Left>
          <EditButton
            type='button'
            onClick={isEditMode ? handleEditConfirmButtonClick : handleEditButtonClick}
            $isEditMode={isEditMode}
          >
            {isEditMode ? 'Confirm' : 'Edit'}
          </EditButton>
        </Left>
        <CreateMusicButton onClick={handleCreateMusicButtonButtonClick}>
          <img src={addSquareSvg} alt='음악 생성 버튼 이미지' />
        </CreateMusicButton>
        {musicList.length === 0 ? (
          <GuidePositioner>
            <Guide>{`Add Music!`}</Guide>
          </GuidePositioner>
        ) : null}
      </Header>

      <MusicContainer musicList={musicList} setMusicList={setMusicList} isEditMode={isEditMode} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 12px;
  border: 1px solid var(--grey-grey300);
  width: 100%;

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

    padding: 0 0 8px;

    margin-top: 0;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Left = styled.div`
  display: flex;
  gap: 8px;
`;

const EditButton = styled.button<{
  $isEditMode: boolean;
}>`
  border: ${({ $isEditMode }) => ($isEditMode ? '2px solid var(--mint3)' : '1px solid var(--grey-grey600)')};
  border-radius: 8px;

  font-weight: bold;
  font-size: 16px;
  color: ${({ $isEditMode }) => ($isEditMode ? 'var(--mint3)' : 'var(--grey-grey600)')};

  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
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
