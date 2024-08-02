// libraries
import axios from 'axios';

// utils
import extractYouTubeVideoId from '@/utils/extractYouTubeVideoId';

// hooks
import { useEffect, useState } from 'react';

// types
import { VideoData } from './MusicPlayer.type';
import useMusicStore from '@/store/useMusicStore';
import useMusicListStore from '@/store/useMusicListStore';
import playNextMusic from '@/utils/playNextMusic';
import playPrevMusic from '@/utils/playPrevMusic';

export default function useMusicPlayer() {
  // useMusicStore.getState()를 통해 music을 가져와버리면 구독이 되지 않아서 music이 변경되어도 반영이 되지 않는다.
  const {
    music: currentMusic,
    currentTime,
    totalTime,
    progressValue,
    isPlayerPlaying,
    setMusic,
    handleTogglePlayButtonClick,
    handleProgressBarClick,
  } = useMusicStore();
  const { musicList } = useMusicListStore();
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  const handleNextMusicButtonClick = () => {
    playNextMusic({
      musicList,
      currentMusic,
      setMusic,
    });
  };

  const handlePreviosMusicButtonClick = () => {
    playPrevMusic({
      musicList,
      currentMusic,
      setMusic,
    });
  };

  useEffect(() => {
    if (!currentMusic?.url) return;

    const getVideoData = async () => {
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
          thumbnails: response.data.items[0].snippet.thumbnails.maxres.url,
        });
      } catch (e) {
        console.error(e);
      }
    };

    getVideoData();
  }, [currentMusic?.url]);

  return {
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
  };
}
