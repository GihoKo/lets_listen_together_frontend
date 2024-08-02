// libraries
import axios from 'axios';

// utils
import extractYouTubeVideoId from '@/utils/extractYouTubeVideoId';

// hooks
import { useEffect, useRef, useState } from 'react';

// types
import { VideoData } from './MusicPlayer.type';
import useMusicStore from '@/store/useMusicStore';
import useMusicListStore from '@/store/useMusicListStore';
import playNextMusic from '@/utils/playNextMusic';
import playPrevMusic from '@/utils/playPrevMusic';

export default function useMusicPlayer() {
  // useMusicStore.getState()를 통해 music을 가져와버리면 구독이 되지 않아서 music이 변경되어도 반영이 되지 않는다.
  const { music, setMusic } = useMusicStore();
  const { musicList } = useMusicListStore();
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  const handleNextMusicButtonClick = () => {
    playNextMusic({
      musicList,
      setMusic,
    });
  };

  const handlePreviosMusicButtonClick = () => {
    playPrevMusic({
      musicList,
      setMusic,
    });
  };

  useEffect(() => {
    if (!music?.url) return;

    const getVideoData = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet',
            id: extractYouTubeVideoId(music?.url),
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

    getVideoData();
  }, [music?.url]);

  // player의 생성과 제거를 관리하기 위해서 useRef를 사용한다.
  const playerRef = useRef<YT.Player | null>(null);

  const initializePlayer = () => {
    if (!music?.url) return;
    const videoId = extractYouTubeVideoId(music.url);
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
    console.log('initializePlayer');
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
        setMusic,
      });
    }
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.destroy();
    }

    if (music?.url) {
      initializePlayer();
    }
  }, [music?.url]);

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
  }, [music?.url]);

  const onProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current) return;
    const progressBarWidth = e.currentTarget.clientWidth;
    const clickedPositionX = e.nativeEvent.offsetX;
    setCurrentTime((clickedPositionX / progressBarWidth) * totalTime);
    setProgressValue((clickedPositionX / progressBarWidth) * 100);
    playerRef.current?.seekTo((clickedPositionX / progressBarWidth) * totalTime, true);
  };

  return {
    music,
    videoData,
    currentTime,
    totalTime,
    progressValue,
    isPlayerPlaying,
    handleNextMusicButtonClick,
    handlePreviosMusicButtonClick,
    onProgressBarClick,
    handleTogglePlayButtonClick,
  };
}
