// libraries
import styled from 'styled-components';

// hooks
import useMusicPlayer from './MusicPlayer.hook';

// utils
import { formatTime } from '../../../../utils/formatNumber';

// images
import mediaPlaySvg from '../../../../images/svg/media-play-black.svg';
import mediaStopSvg from '../../../../images/svg/media-stop.svg';
import previosMusicSvg from '../../../../images/svg/previous-music.svg';
import nextMusicSvg from '../../../../images/svg/next-music.svg';
import mockImage from '@/images/dummyImage.png';

export default function MusicPlayer() {
  // logics
  const {
    currentMusic,
    videoData,
    currentTime,
    totalTime,
    progressValue,
    isPlayerPlaying,
    handleNextMusicButtonClick,
    handlePreviosMusicButtonClick,
    handleTogglePlayButtonClick,
    handleProgressBarClick,
  } = useMusicPlayer();

  // view
  if (!currentMusic) {
    return <NoPlayer>음악을 선택해주세요!</NoPlayer>;
  }

  return (
    <Wrapper>
      <ImageBox>
        <img src={videoData?.thumbnails ? videoData?.thumbnails : mockImage} alt='비디오 썸네일 이미지' />
      </ImageBox>
      <Title>{currentMusic?.title}</Title>
      <Artist>{currentMusic?.artist}</Artist>
      <TimeBox>
        <TimeBoxPositioner>
          <CurrentTime>{formatTime(currentTime)}</CurrentTime>
          <TotalTime>{formatTime(totalTime)}</TotalTime>
        </TimeBoxPositioner>
        <ProgressBar onClick={handleProgressBarClick}>
          <ProgressTrack progressValue={progressValue} />
        </ProgressBar>
      </TimeBox>
      <PlayBox>
        <PreviousMusicButton onClick={handlePreviosMusicButtonClick}>
          <img src={previosMusicSvg} alt='이전 곡 버튼 이미지' />
        </PreviousMusicButton>
        <TogglePlayButton onClick={handleTogglePlayButtonClick}>
          <img src={isPlayerPlaying ? mediaStopSvg : mediaPlaySvg} alt='재생/정지 버튼' />
        </TogglePlayButton>
        <NextMusicButton onClick={handleNextMusicButtonClick}>
          <img src={nextMusicSvg} alt='다음 곡 버튼 이미지' />
        </NextMusicButton>
      </PlayBox>
      <YoutubePlayer id='player' />
    </Wrapper>
  );
}

const NoPlayer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--grey-grey100);
  font-size: 24px;
  color: var(--grey-grey600);
  font-weight: bold;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--grey-grey100);
  padding: 48px 36px;

  @media (max-width: 768px) {
    border-radius: 0;
    width: 100vw;
    max-width: none;
    height: auto;

    gap: 0px;
  }
`;

const ImageBox = styled.div`
  border-radius: 24px;
  width: 100%;
  aspect-ratio: 4 / 3;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    0 0 5px var(--mint5),
    0 0 10px var(--mint5);

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Title = styled.div`
  margin-top: 16px;
  font-size: 20px;
  font-weight: bold;
  color: var(--mint1);
`;

const Artist = styled.div`
  margin-top: 8px;
  font-size: 16px;
  color: var(--grey-grey600);
`;

const TimeBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  color: var(--grey-grey600);

  margin-top: 16px;
`;

const TimeBoxPositioner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProgressBar = styled.div`
  border-radius: 6px;
  border: 1px solid var(--mint5);
  width: 100%;
  height: 12px;

  background-color: var(--mint8);
  position: relative;

  cursor: pointer;
`;

const ProgressTrack = styled.div<{
  progressValue: number;
}>`
  border-radius: 6px;
  width: ${(props) => `${props.progressValue}%`};
  height: 100%;

  background-color: var(--mint5);
  box-shadow: 0 0 10px var(--mint5);

  position: absolute;
`;

const Time = styled.div`
  font-size: 14px;
  color: var(--mint5);
`;

const CurrentTime = styled(Time)``;

const TotalTime = styled(Time)``;

const PlayBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-top: 32px;
`;

const PlayButton = styled.button`
  transition: all 0.3s;

  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  img {
    width: 100%;
    height: 100%;

    cursor: pointer;
  }
`;

const PreviousMusicButton = styled(PlayButton)`
  width: 40px;
  height: 40px;
`;

const TogglePlayButton = styled(PlayButton)`
  border-radius: 50%;
  width: 64px;
  height: 64px;

  padding: 16px;
  overflow: hidden;
  background-color: var(--mint5);
  box-shadow: 0 0 10px var(--mint5);

  img {
    width: 100%;
    height: 100%;
  }
`;

const NextMusicButton = styled(PlayButton)`
  width: 40px;
  height: 40px;
`;

const YoutubePlayer = styled.div`
  display: none;
`;
