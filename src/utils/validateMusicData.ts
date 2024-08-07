import { ErrorMessagesType } from '@/types/enum';
import validateMusicUrl from './validateMusicUrl';

interface ValidateMusicDataProps {
  musicData: {
    title: string;
    artist: string;
    url: string;
  };
  setErrorMessage: (message: string) => void;
}

type ValidateMusicData = ({ musicData, setErrorMessage }: ValidateMusicDataProps) => boolean;

const validateMusicData: ValidateMusicData = ({ musicData, setErrorMessage }) => {
  if (musicData.title.trim() === '') {
    setErrorMessage(ErrorMessagesType.MUSIC_TITLE_EMPTY);
    return false;
  }

  if (musicData.artist.trim() === '') {
    setErrorMessage(ErrorMessagesType.MUSIC_ARTIST_EMPTY);
    return false;
  }

  if (musicData.url.trim() === '') {
    setErrorMessage(ErrorMessagesType.MUSIC_URL_EMPTY);
    return false;
  }

  if (!validateMusicUrl(musicData.url)) {
    setErrorMessage(ErrorMessagesType.MUSIC_URL_UNVALID);
    return false;
  }

  return true;
};

export default validateMusicData;
