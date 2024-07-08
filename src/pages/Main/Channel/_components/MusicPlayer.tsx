import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { formatTime } from '../../../../utils/formatNumber';
import { Music } from '../_types/interface';
import extractYouTubeVideoId from '../../../../utils/extractYouTubeVideoId';
import mediaPlaySvg from '../../../../images/svg/media-play.svg';
import mediaStopSvg from '../../../../images/svg/media-stop.svg';
import previosMusicSvg from '../../../../images/svg/previous-music.svg';
import nextMusicSvg from '../../../../images/svg/next-music.svg';

export interface VideoData {
  id: string;
  title: string;
  channelTitle: string;
  thumbnails: string;
}

interface MusicPlayerProps {
  currentMusic: Music | null;
  playNextMusic: () => void;
  playPrevMusic: () => void;
}

export default function MusicPlayer({ currentMusic, playNextMusic, playPrevMusic }: MusicPlayerProps) {
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  useEffect(() => {
    if (!currentMusic?.url) return;

    const getVideosData = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet',
            id: extractYouTubeVideoId(currentMusic?.url),
            key: process.env.GOOGLE_API_KEY,
          },
        });
        setVideoData({
          id: response.data.items[0].id,
          title: response.data.items[0].snippet.title,
          channelTitle: response.data.items[0].snippet.channelTitle,
          thumbnails: response.data.items[0].snippet.thumbnails.default.url,
        });
      } catch (e) {
        console.error(e);
      }
    };

    getVideosData();
  }, [currentMusic?.url]);

  // player의 생성과 제거를 관리하기 위해서 useRef를 사용한다.
  const playerRef = useRef<YT.Player | null>(null);

  const initializePlayer = () => {
    if (!currentMusic?.url) return;
    playerRef.current = new window.YT.Player('player', {
      height: '360',
      width: '640',
      videoId: extractYouTubeVideoId(currentMusic?.url),
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
    console.log('initializePlayer');
  };

  const onPlayerReady = (event: any) => {
    event.target.playVideo();
  };

  const onPlayerStateChange = (event: any) => {
    /**
     * onStateChange 이벤트
     * -1(시작되지 않음)
     *  0(종료됨)
     *  1(재생 중)
     *  2(일시중지됨)
     *  3(버퍼링 중)
     *  5(동영상 신호)
     */
    if (event.data === 0) {
      playNextMusic();
    }
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.destroy();
    }

    if (currentMusic?.url) {
      console.log('currentMusic?.name', currentMusic?.title);
      initializePlayer();
    }
  }, [currentMusic?.url]);

  const [isPlayerPlaying, setIsPlayerPlaying] = useState<boolean>(false);

  const handleTogglePlayButtonClick = () => {
    if (playerRef.current) {
      if (playerRef.current.getPlayerState() === window.YT.PlayerState.PLAYING) {
        playerRef.current.pauseVideo();
        setIsPlayerPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlayerPlaying(true);
      }
    }
  };

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [progressValue, setProgressValue] = useState<number>(0);

  useEffect(() => {
    if (!playerRef.current) return;

    const id = setInterval(() => {
      if (
        playerRef.current &&
        typeof playerRef.current.getCurrentTime === 'function' &&
        typeof playerRef.current.getDuration === 'function'
      ) {
        setCurrentTime(playerRef.current.getCurrentTime());
        setTotalTime(playerRef.current.getDuration());
        setProgressValue((playerRef.current.getCurrentTime() / playerRef.current.getDuration()) * 100);
      }
    }, 500);

    return () => {
      clearInterval(id);
    };
  }, [currentMusic]);

  const onProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current) return;

    const progressBarWidth = e.currentTarget.clientWidth;
    const clickedPositionX = e.nativeEvent.offsetX;
    setCurrentTime((clickedPositionX / progressBarWidth) * totalTime);
    setProgressValue((clickedPositionX / progressBarWidth) * 100);
    playerRef.current?.seekTo((clickedPositionX / progressBarWidth) * totalTime, true);
  };

  if (!currentMusic) return <>유튜브 플레이어를 초기화 중 입니다...</>;

  return (
    <Wrapper>
      <ImageBox>
        <img src={videoData?.thumbnails} alt='비디오 썸네일 이미지' />
      </ImageBox>
      <Title>{currentMusic.title}</Title>
      <Artist>{currentMusic.artist}</Artist>
      <TimeBox>
        <TimeBoxPositioner>
          <CurrentTime>{formatTime(currentTime)}</CurrentTime>
          <TotalTime>{formatTime(totalTime)}</TotalTime>
        </TimeBoxPositioner>
        <ProgressBar onClick={onProgressBarClick}>
          <ProgressTrack progressValue={progressValue} />
        </ProgressBar>
      </TimeBox>
      <PlayBox>
        <PreviousMusicButton onClick={playPrevMusic}>
          <img src={previosMusicSvg} alt='이전 곡 버튼 이미지' />
        </PreviousMusicButton>
        <TogglePlayButton onClick={handleTogglePlayButtonClick}>
          <img src={isPlayerPlaying ? mediaPlaySvg : mediaStopSvg} alt='재생/정지 버튼' />
        </TogglePlayButton>
        <NextMusicButton onClick={playNextMusic}>
          <img src={nextMusicSvg} alt='다음 곡 버튼 이미지' />
        </NextMusicButton>
      </PlayBox>
      <YoutubePlayer id='player' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 12px;
  width: 100%;
  max-width: 320px;
  height: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--grey-grey150);
  padding: 48px 0px;
`;

const ImageBox = styled.div`
  border: 1px solid #000;
  border-radius: 24px;
  width: 240px;
  height: 240px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  background-color: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Title = styled.div`
  margin-top: 16px;
  font-size: 20px;
  color: var(--grey-grey900);
`;

const Artist = styled.div`
  margin-top: 8px;
  font-size: 16px;
  color: var(--grey-grey600);
`;

const TimeBox = styled.div`
  width: 240px;

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
  width: 100%;
  height: 8px;

  background-color: var(--grey-grey600);

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
  color: var(--grey-grey600);
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
  width: 48px;
  height: 48px;
`;

const NextMusicButton = styled(PlayButton)`
  width: 40px;
  height: 40px;
`;

const YoutubePlayer = styled.div`
  display: none;
`;
