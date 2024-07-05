import styled from 'styled-components';
import { Music } from '../_types/interface';
import MusicItem from './MusicItem';
import upCircleSvg from '../../../../images/svg/up-circle.svg';
import { useRef } from 'react';

interface MusicContainerProps {
  data: Music[];
}

export default function MusicContainer({ data }: MusicContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollUpButtonClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Container ref={containerRef}>
        {data.map((music, index) => (
          <MusicItem key={music.id} index={index} music={music} />
        ))}
      </Container>
      <ScrollUpButton onClick={handleScrollUpButtonClick}>
        <img src={upCircleSvg} alt='위로 스크롤 버튼 이미지' />
      </ScrollUpButton>
    </>
  );
}

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
`;
