import { MusicListStore } from '@/store/useMusicListStore';
import { MusicStore } from '@/store/useMusicStore';

interface PlayNextMusicProps {
  musicList: MusicListStore['musicList'];
  setMusic: MusicStore['setMusic'];
}

const playNextMusic = ({ musicList, setMusic }: PlayNextMusicProps) => {
  let currentMusicIndex = musicList.findIndex((music) => music.id === music?.id);
  if (currentMusicIndex === musicList.length - 1) {
    currentMusicIndex = -1;
  }
  setMusic(musicList[currentMusicIndex + 1]);
};

export default playNextMusic;
