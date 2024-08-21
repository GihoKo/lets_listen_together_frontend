// libraries
import styled from 'styled-components';

// hooks
import useMusicContainer from './MusicContainer.hook';

// components
import MusicItem from './MusicItem';

// images
import upCircleSvg from '@/images/svg/up-circle.svg';
import { MusicContainerProps } from './MusicContainer.type';

export default function MusicContainer({ isEditMode }: MusicContainerProps) {
  // logics
  const { musicList, containerRef, handleScrollUpButtonClick } = useMusicContainer();

  // view

  if (musicList.length === 0) {
    return <NoMusic>음악을 추가해보세요!</NoMusic>;
  }

  return (
    <>
      <Container ref={containerRef}>
        {musicList.map((music, index) => (
          <MusicItem key={music.id} index={index} music={music} isEditMode={isEditMode} />
        ))}
      </Container>
      <ScrollUpButton onClick={handleScrollUpButtonClick}>
        <img src={upCircleSvg} alt='위로 스크롤 버튼 이미지' />
      </ScrollUpButton>
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

const ScrollUpButton = styled.button`
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

    margin-top: 8px;
  }
`;
