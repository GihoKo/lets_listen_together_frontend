// libraries
import styled from 'styled-components';

// hooks
import useMusicContainer from './MusicContainer.hook';

// components
const Music = lazy(() => import('./Music/Music'));

// types
import { MusicContainerProps } from './MusicContainer.type';
import { lazy } from 'react';

export default function MusicContainer({ isEditMode }: MusicContainerProps) {
  // logics
  const { musicList } = useMusicContainer();

  // view

  if (musicList.length === 0) {
    return <NoMusic>음악을 추가해보세요!</NoMusic>;
  }

  return (
    <>
      <Container>
        {musicList.map((music, index) => (
          <Music key={music.id} index={index} music={music} isEditMode={isEditMode} />
        ))}
      </Container>
    </>
  );
}

const NoMusic = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  color: var(--grey-grey600);
  font-weight: bold;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const Container = styled.div`
  border-bottom: 1px solid var(--grey-grey300);
  width: 100%;
  height: 1px;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 0px;
  }
`;
