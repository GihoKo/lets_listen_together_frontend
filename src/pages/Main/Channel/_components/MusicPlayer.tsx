import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { formatTime } from '../../../../utils/formatNumber';
import { Music } from '../_types/interface';
import extractYouTubeVideoId from '../../../../utils/extractYouTubeVideoId';

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
  const player = useRef<YT.Player | null>(null);

  useEffect(() => {
    if (!currentMusic) return;

    const youtubeResourceFetcher = async () => {
      try {
        const videoId = extractYouTubeVideoId(currentMusic.url);
        if (!videoId) {
          console.log('Invalid URL');
          return;
        }

        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet',
            id: videoId,
            key: process.env.GOOGLE_API_KEY,
          },
        });

        const refinedData = response.data.items[0];
        setVideoData(() => {
          return {
            id: refinedData.id,
            title: refinedData.snippet.title,
            channelTitle: refinedData.snippet.channelTitle,
            thumbnails: refinedData.snippet.thumbnails.standard.url,
          };
        });
      } catch (e) {
        console.log(e);
      }
    };

    youtubeResourceFetcher();

    return () => {};
  }, [currentMusic]);

  useEffect(() => {
    console.log('window.YT', window.YT);
    if (!currentMusic || typeof window.YT === 'undefined') return;

    function onYouTubeIframeAPIReady() {
      const videoId = extractYouTubeVideoId(currentMusic?.url);
      if (!videoId) return;

      if (player.current) {
        player.current.loadVideoById(videoId);
      } else {
        player.current = new window.YT.Player('player', {
          height: '360',
          width: '640',
          videoId: videoId,
          events: {
            onReady: onPlayerReady,
          },
        });
      }
    }

    if (typeof window.YT.Player === 'undefined') {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }

    return () => {
      delete window.onYouTubeIframeAPIReady;
    };
  }, [currentMusic]);

  function onPlayerReady(event: YT.PlayerEvent) {
    event.target.playVideo();
  }

  const handleTogglePlayButtonClick = () => {
    if (player.current) {
      if (player.current.getPlayerState() === window.YT.PlayerState.PLAYING) {
        player.current.pauseVideo();
      } else {
        player.current.playVideo();
      }
    }
  };

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [progressValue, setProgressValue] = useState<number>(0);

  useEffect(() => {
    if (!player.current) return;

    const id = setInterval(() => {
      if (
        player.current &&
        typeof player.current.getCurrentTime === 'function' &&
        typeof player.current.getDuration === 'function'
      ) {
        setCurrentTime(player.current.getCurrentTime());
        setTotalTime(player.current.getDuration());
        setProgressValue((player.current.getCurrentTime() / player.current.getDuration()) * 100);
      }
    }, 500);

    return () => {
      clearInterval(id);
    };
  }, [currentMusic]);

  const onProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!player.current) return;

    const progressBarWidth = e.currentTarget.clientWidth;
    const clickedPositionX = e.nativeEvent.offsetX;
    setCurrentTime((clickedPositionX / progressBarWidth) * totalTime);
    setProgressValue((clickedPositionX / progressBarWidth) * 100);
    player.current?.seekTo((clickedPositionX / progressBarWidth) * totalTime, true);
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
