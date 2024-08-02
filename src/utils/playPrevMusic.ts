import { MusicListStore } from '@/store/useMusicListStore';
import { MusicStore } from '@/store/useMusicStore';

interface PlayPrevMusicProps {
  musicList: MusicListStore['musicList'];
  setMusic: MusicStore['setMusic'];
}

const playPrevMusic = ({ musicList, setMusic }: PlayPrevMusicProps) => {
  let currentMusicIndex = musicList.findIndex((music) => music.id === music?.id);
  if (currentMusicIndex === 0) {
    currentMusicIndex = musicList.length;
  }
  setMusic(musicList[currentMusicIndex - 1]);
};

export default playPrevMusic;
