import { MusicListStore } from '@/store/useMusicListStore';
import { MusicStore } from '@/store/useMusicStore';

interface PlayNextMusicProps {
  musicList: MusicListStore['musicList'];
  currentMusic: MusicStore['music'];
  setMusic: MusicStore['setMusic'];
}

const playNextMusic = ({ musicList, currentMusic, setMusic }: PlayNextMusicProps) => {
  let currentMusicIndex = musicList.findIndex((music) => music.id === currentMusic?.id);
  if (currentMusicIndex === musicList.length - 1) {
    currentMusicIndex = -1;
  }
  setMusic(musicList[currentMusicIndex + 1]);
};

export default playNextMusic;
