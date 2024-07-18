import styled from 'styled-components';
import { Music } from '../_types/interface';
import MusicItem from './MusicItem';
import upCircleSvg from '../../../../images/svg/up-circle.svg';
import { useRef } from 'react';
import useMusicStore from '../../../../store/useMusicStore';

interface MusicContainerProps {
  musicList: Music[];
  isEditMode: boolean;
  setMusicList: React.Dispatch<React.SetStateAction<Music[]>>;
}

export default function MusicContainer({ musicList, setMusicList, isEditMode }: MusicContainerProps) {
  const { music: currentMusic } = useMusicStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollUpButtonClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (musicList.length === 0) {
    return <NoMusic>음악을 추가해보세요!</NoMusic>;
  }

  return (
    <>
      <Container ref={containerRef}>
        {musicList.map((music, index) => (
          <MusicItem
            key={music.id}
            index={index}
            music={music}
            setMusicList={setMusicList}
            currentMusic={currentMusic}
            isEditMode={isEditMode}
          />
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
  width: 100%;
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
