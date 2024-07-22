import { Music } from '@/types/music';
import extractYouTubeVideoId from '@/utils/extractYouTubeVideoId';
import axios from 'axios';

interface GetMusicImageParams {
  music: Music;
}

export const getMusicImage = async ({ music }: GetMusicImageParams) => {
  try {
    const videoId = extractYouTubeVideoId(music?.url);

    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'snippet',
        id: videoId,
        key: process.env.GOOGLE_API_KEY,
      },
    });

    return response.data;
  } catch (e) {
    console.error(e);
  }
};
