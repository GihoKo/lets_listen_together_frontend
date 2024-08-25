// hook
import useMusicStore from '@/store/useMusicStore';
import useMusicListStore from '@/store/useMusicListStore';
import useGetVideoData from '@/apis/hooks/useGetVideoData';

// utils
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
  const { data: videoData } = useGetVideoData(currentMusic?.url);

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
