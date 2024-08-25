// libraries
import { lazy, Suspense } from 'react';
import styled from 'styled-components';

// components

import SubscribeButton from './SubscribeButton/SubscribeButton';
import EditButton from './EditButton/EditButton';
import FallBack from '@/components/Molecules/ComponentFallBack';
import QueryErrorBoundary from '@/components/Molecules/QueryErrorBoundary';
import ComponentFallBack from '@/components/Molecules/ComponentFallBack';
import AddMusicGuide from './AddMusicGuide/AddMusicGuide';

const MusicContainer = lazy(() => import('./MusicContainer/MusicContainer'));

// images
import addSquareSvg from '@/images/svg/add-square.svg';

// hooks
import useMusicList from './MusicList.hook';

export default function MusicList() {
  // logics
  const { isEditMode, channelId, setIsEditMode, handleCreateMusicButtonButtonClick, handleEditConfirmButtonClick } =
    useMusicList();

  // view
  return (
    <Wrapper>
      <Header>
        <Left>
          <QueryErrorBoundary>
            <Suspense fallback={<ComponentFallBack />}>
              <SubscribeButton channelId={channelId} />
            </Suspense>
          </QueryErrorBoundary>

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
