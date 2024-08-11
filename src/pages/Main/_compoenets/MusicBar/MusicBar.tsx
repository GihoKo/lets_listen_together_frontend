// libaries
import styled from 'styled-components';

// images
import mediaPlaySvg from '@/images/svg/media-play-black.svg';
import mediaPauseSvg from '@/images/svg/media-stop.svg';
import previousMusicSvg from '@/images/svg/previous-music.svg';
import nextMusicSvg from '@/images/svg/next-music.svg';
import useMusicBar from './MusicBar.hook';

export default function MusicBar() {
  // logics
  const {
    currentMusic,
    youtubeVideoData,
    channelId,
    progressValue,
    isPlayerPlaying,
    handleNextMusicButtonClick,
    handlePreviosMusicButtonClick,
    handleTogglePlayButtonClick,
    handleProgressBarClick,
  } = useMusicBar();

  // view
  if (!currentMusic) {
    return null;
  }

  return (
    <Wrapper $channelId={channelId}>
      <Progressbar onClick={handleProgressBarClick}>
        <ProgressTrack progressValue={progressValue} />
      </Progressbar>

      <MusicInfoBox>
        <Left>
          <MusicImage>
            <img src={youtubeVideoData?.items[0].snippet.thumbnails.maxres?.url} alt='음악 이미지' />
          </MusicImage>
          <MusicInfo>
            <MusicTitle>{currentMusic.title}</MusicTitle>
            <MusicArtist>{currentMusic.artist}</MusicArtist>
          </MusicInfo>
        </Left>
        <Right>
          <Button onClick={handleNextMusicButtonClick}>
            <img src={previousMusicSvg} alt='이전 음악 버튼 이미지' />
          </Button>
          <PlayButton onClick={handleTogglePlayButtonClick}>
            {isPlayerPlaying ? (
              <img src={mediaPauseSvg} alt='일시정지 버튼 이미지' />
            ) : (
              <img src={mediaPlaySvg} alt='재생 버튼 이미지' />
            )}
          </PlayButton>
          <Button onClick={handlePreviosMusicButtonClick}>
            <img src={nextMusicSvg} alt='다음 음악 버튼 이미지' />
          </Button>
        </Right>
      </MusicInfoBox>
    </Wrapper>
  );
}

const Wrapper = styled.div<{
  $channelId: string | undefined;
}>`
  border-top: 1px solid var(--grey-grey200);
  display: ${({ $channelId }) => ($channelId ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;

  background-color: var(--grey-grey100);

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Progressbar = styled.div`
  width: 100%;
  height: 4px;
  background-color: var(--grey-grey200);
  cursor: pointer;
`;

const ProgressTrack = styled.div<{
  progressValue: number;
}>`
  width: ${({ progressValue }) => progressValue}%;
  height: 100%;
  background-color: var(--mint5);
`;

const MusicInfoBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px;

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
  overflow: hidden;

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
