import styled from 'styled-components';
import { MusicItemProps } from '../_types/interface';

export default function MusicItem({ music, selectMusic }: MusicItemProps) {
  const handleClick = () => {
    selectMusic(music);
    console.log('music clicked', music);
  };
  return (
    <Wrapper onClick={handleClick}>
      <ImageBox>
        <img src={music.url} alt='album' />
      </ImageBox>
      <Right>
        <Title>{music.title}</Title>
        <Artist>{music.artist}</Artist>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid #000;
  border-radius: 12px;
  min-width: 300px;
  width: 100%;

  display: flex;
  gap: 16px;

  padding: 8px 20px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ImageBox = styled.div`
  border: 1px solid #000;
  border-radius: 50%;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const Title = styled.div`
  font-size: 16px;
`;

const Artist = styled.div`
  font-size: 12px;
`;
