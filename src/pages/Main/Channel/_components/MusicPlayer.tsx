import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { formatTime } from '../../../../utils/formatNumber';
import { Music } from '../_types/interface';
import extractYouTubeVideoId from '../../../../utils/extractYouTubeVideoId';
import { set } from 'react-hook-form';

interface VideoData {
  id: string;
  title: string;
  channelTitle: string;
  thumbnails: string;
}

interface MusicPlayerProps {
  currentMusic: Music | null;
}

export default function MusicPlayer({ currentMusic }: MusicPlayerProps) {
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  useEffect(() => {
    if (!currentMusic?.url) return;

    const getVideosData = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet',
            id: extractYouTubeVideoId(currentMusic?.url),
            key: process.env.REACT_APP_GOOGLE_API_KEY,
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
    console.log('onPlayerStateChange', event.data);
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.destroy();
    }

    if (currentMusic?.url) {
      initializePlayer();
    }
  }, [currentMusic?.url]);

  const handleTogglePlayButtonClick = () => {
    if (playerRef.current) {
      if (playerRef.current.getPlayerState() === window.YT.PlayerState.PLAYING) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
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

  if (!currentMusic) return null;

  return (
    <Wrapper>
      <ImageBox>
        <img src={videoData?.thumbnails} alt='비디오 썸네일 이미지' />
      </ImageBox>
      <Title>{currentMusic.title}</Title>
      <Artist>{currentMusic.artist}</Artist>
      <TogglePlayButton onClick={handleTogglePlayButtonClick}>재생</TogglePlayButton>
      <TimeBox>
        <Positioner>
          <CurrentTime>{formatTime(currentTime)}</CurrentTime>
          <TotalTime>{formatTime(totalTime)}</TotalTime>
        </Positioner>
        <ProgressBar onClick={onProgressBarClick}>
          <ProgressTrack progressValue={progressValue} />
          <CurrentTImeIndicator progressValue={progressValue} />
        </ProgressBar>
      </TimeBox>
      <YoutubePlayer id='player' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding: 48px 64px;
`;

const ImageBox = styled.div`
  border: 1px solid #000;
  border-radius: 50%;
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
`;

const Artist = styled.div`
  margin-top: 8px;
  font-size: 16px;
`;

const TogglePlayButton = styled.button`
  width: 120px;
  height: 48px;

  background-color: #000;
  color: #fff;

  border: none;
  border-radius: 8px;

  cursor: pointer;
`;

const TimeBox = styled.div`
  width: 240px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Positioner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;

  background-color: #ccc;

  position: relative;

  cursor: pointer;
`;

const ProgressTrack = styled.div<{
  progressValue: number;
}>`
  width: ${(props) => `${props.progressValue}%`};
  height: 100%;

  background-color: #000;

  position: absolute;
`;

const CurrentTImeIndicator = styled.div<{
  progressValue: number;
}>`
  border-radius: 50%;
  width: 12px;
  height: 12px;

  background-color: #000;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => `${props.progressValue}%`};
`;

const CurrentTime = styled.div``;

const TotalTime = styled.div``;

const YoutubePlayer = styled.div`
  display: none;
`;
