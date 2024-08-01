type ValidateMusicUrl = (url: string) => boolean;

const validateMusicUrl: ValidateMusicUrl = (url) => {
  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube|youtu|youtube-nocookie)\.(com|be)\/(watch\?v=|embed\/|v\/|.+\?v=)?([^&=%?]{11})/;

  return youtubeRegex.test(url);
};

export default validateMusicUrl;
