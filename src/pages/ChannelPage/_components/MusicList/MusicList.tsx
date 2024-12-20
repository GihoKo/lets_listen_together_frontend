// libraries
import { lazy, Suspense } from 'react';
import styled from 'styled-components';

// components
import EditButton from './EditButton/EditButton';
import FallBack from '@/components/Molecules/FallBack/ComponentFallBack';
import QueryErrorBoundary from '@/components/Molecules/QueryErrorBoundary/QueryErrorBoundary';
import AddMusicGuide from './AddMusicGuide/AddMusicGuide';
import SubscribeButton from './SubscribeButton/SubscribeButton';

const MusicContainer = lazy(() => import('./MusicContainer/MusicContainer'));

// images
import addSquareSvg from '@/images/svg/add-square.svg';

// hooks
import useMusicList from './MusicList.hook';

interface MusicListProps {
  zIndex: {
    player: number;
    musicList: number;
  };
}

export default function MusicList({ zIndex }: MusicListProps) {
  // logics
  const { isEditMode, channelId, setIsEditMode, handleCreateMusicButtonButtonClick, handleEditConfirmButtonClick } =
    useMusicList();

  // view
  return (
    <Wrapper $zIndex={zIndex}>
      <Header>
        <Left>
          <SubscribeButton channelId={channelId} />

          <EditButton
            isEditMode={isEditMode}
            handleEditConfirmButtonClick={handleEditConfirmButtonClick}
            setIsEditMode={setIsEditMode}
          />
        </Left>
        <CreateMusicButton onClick={handleCreateMusicButtonButtonClick}>
          <img src={addSquareSvg} alt='음악 생성 버튼 이미지' />
        </CreateMusicButton>
        <AddMusicGuide />
      </Header>

      <QueryErrorBoundary>
        <Suspense fallback={<FallBack />}>
          <MusicContainer isEditMode={isEditMode} />
        </Suspense>
      </QueryErrorBoundary>
    </Wrapper>
  );
}

const Wrapper = styled.div<{
  $zIndex: {
    player: number;
    musicList: number;
  };
}>`
  border-radius: 12px;
  border: 1px solid var(--grey-grey300);
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  background-color: var(--grey-grey150);
  padding: 16px 32px;

  z-index: ${({ $zIndex }) => $zIndex.musicList};

  @media (max-width: 768px) {
    border-radius: 0;
    width: 100vw;

    gap: 0px;

    padding: 0;
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
  gap: 16px;

  @media (max-width: 1024px) {
    gap: 8px;
  }

  @media (max-width: 768px) {
    gap: 4px;
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
