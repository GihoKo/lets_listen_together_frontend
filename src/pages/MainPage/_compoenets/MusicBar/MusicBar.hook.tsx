// hooks
import useGetVideoData from '@/apis/hooks/useGetVideoData';
import useMusicListStore from '@/store/useMusicListStore';
import useMusicStore from '@/store/useMusicStore';
import { useParams } from 'react-router-dom';

// utils
import playNextMusic from '@/utils/playNextMusic';
import playPrevMusic from '@/utils/playPrevMusic';

export default function useMusicBar() {
  const { channelId } = useParams();
  const {
    music: currentMusic,
    setMusic,
    progressValue,
    isPlayerPlaying,
    handleTogglePlayButtonClick,
    handleProgressBarClick,
  } = useMusicStore();
  const { musicList } = useMusicListStore();
  const { data: youtubeVideoData } = useGetVideoData(currentMusic?.url);

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
  return {
    currentMusic,
    youtubeVideoData,
    channelId,
    progressValue,
    isPlayerPlaying,
    handleNextMusicButtonClick,
    handlePreviosMusicButtonClick,
    handleTogglePlayButtonClick,
    handleProgressBarClick,
  };
}
