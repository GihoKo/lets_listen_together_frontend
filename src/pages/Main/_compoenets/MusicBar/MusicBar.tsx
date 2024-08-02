import styled from 'styled-components';
import mediaPlaySvg from '@/images/svg/media-play-black.svg';
import mediaPauseSvg from '@/images/svg/media-stop.svg';
import previousMusicSvg from '@/images/svg/previous-music.svg';
import nextMusicSvg from '@/images/svg/next-music.svg';
import { useState } from 'react';

export default function MusicBar() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsPlaying((prev) => !prev);
  };

  const returnPlayButtonImage = () => {
    if (isPlaying) {
      return mediaPauseSvg;
    }

    return mediaPlaySvg;
  };

  return (
    <Wrapper>
      <Left>
        <MusicImage>
          <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='music' />
        </MusicImage>
        <MusicInfo>
          <MusicTitle>music title</MusicTitle>
          <MusicArtist>artist</MusicArtist>
        </MusicInfo>
      </Left>
      <Right>
        <Button>
          <img src={previousMusicSvg} alt='이전 음악 버튼 이미지' />
        </Button>
        <PlayButton onClick={handlePlayButtonClick}>
          <img src={returnPlayButtonImage()} alt='음악 플레이 버튼' />
        </PlayButton>
        <Button>
          <img src={nextMusicSvg} alt='다음 음악 버튼 이미지' />
        </Button>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top: 1px solid var(--grey-grey200);
  display: flex;
  justify-content: space-between;

  background-color: var(--grey-grey100);
  padding: 24px;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const MusicImage = styled.div`
  border-radius: 50%;
  width: 64px;
  height: 64px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MusicTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: var(--grey-grey600);
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const MusicArtist = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: var(--grey-grey500);
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const Button = styled.button`
  width: 36px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;

    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const PlayButton = styled(Button)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  padding: 12px;
  background-color: var(--mint5);

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;
