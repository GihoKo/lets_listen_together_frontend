import styled from 'styled-components';
import { useCallback, useEffect, useRef } from 'react';
import useMusicStore from '@/store/useMusicStore';
import useMusicListStore from '@/store/useMusicListStore';
import extractYouTubeVideoId from '@/utils/extractYouTubeVideoId';
import playNextMusic from '@/utils/playNextMusic';

export interface VideoData {
  id: string;
  title: string;
  channelTitle: string;
  thumbnails: string;
}

export default function YoutubeIframePlayer() {
  // logics
  const {
    music: currentMusic,
    setMusic: setCurrentMusic,
    totalTime,
    setCurrentTime,
    setTotalTime,
    setProgressValue,
    setIsPlayerPlaying,
    setHandleTogglePlayButtonClick,
    setHandleProgressBarClick,
  } = useMusicStore();
  const { musicList } = useMusicListStore();

  // player의 생성과 제거를 관리하기 위해서 useRef를 사용한다.
  const playerRef = useRef<YT.Player | null>(null);

  const initializePlayer = () => {
    if (!currentMusic?.url) return;
    const videoId = extractYouTubeVideoId(currentMusic.url);
    if (!videoId) return;
    playerRef.current = new window.YT.Player('player', {
      height: '360',
      width: '640',
      videoId: videoId,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  };

  const onPlayerReady = (event: YT.PlayerEvent) => {
    event.target.playVideo();
  };

  const onPlayerStateChange = (event: YT.OnStateChangeEvent) => {
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
      playNextMusic({
        musicList,
        currentMusic,
        setMusic: setCurrentMusic,
      });
    }
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.destroy();
    }

    if (currentMusic?.url) {
      initializePlayer();
    }
  }, [currentMusic?.url]);

  const handleTogglePlayButtonClick = useCallback(() => {
    if (playerRef.current) {
      if (playerRef.current.getPlayerState() === window.YT.PlayerState.PLAYING) {
        playerRef.current.pauseVideo();
        setIsPlayerPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlayerPlaying(true);
      }
    }
  }, [setIsPlayerPlaying]);

  useEffect(() => {
    if (!playerRef.current) return;

    const id = setInterval(() => {
      if (
        playerRef.current &&
        typeof playerRef.current.getCurrentTime === 'function' &&
        typeof playerRef.current.getDuration === 'function'
      ) {
        if (playerRef.current?.getPlayerState() !== window.YT.PlayerState.PLAYING) return;

        const currentTime = playerRef.current.getCurrentTime();
        const totalTime = playerRef.current.getDuration();
        const progressValue = (currentTime / totalTime) * 100;

        setCurrentTime(currentTime);
        setTotalTime(totalTime);
        setProgressValue(progressValue);
      }
    }, 500);

    return () => {
      clearInterval(id);
    };
  }, [currentMusic?.url]);

  const handleProgressBarClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!playerRef.current) return;

      const progressBarWidth = e.currentTarget.clientWidth;
      const clickedPositionX = e.nativeEvent.offsetX;
      setCurrentTime((clickedPositionX / progressBarWidth) * totalTime);
      setProgressValue((clickedPositionX / progressBarWidth) * 100);
      playerRef.current?.seekTo((clickedPositionX / progressBarWidth) * totalTime, true);
    },
    [totalTime, setCurrentTime, setProgressValue],
  );

  useEffect(() => {
    if (!playerRef.current) return;
    setHandleTogglePlayButtonClick(handleTogglePlayButtonClick);
    setHandleProgressBarClick(handleProgressBarClick);
  }, [handleTogglePlayButtonClick, handleProgressBarClick]);

  // view
  if (!currentMusic?.url) return null;

  return (
    <>
      <YoutubePlayer id='player' />
    </>
  );
}

const YoutubePlayer = styled.div`
  display: none;
`;
