import extractYouTubeVideoId from '@/utils/extractYouTubeVideoId';
import axios from 'axios';

export const getVideoData = async (musicUrl: string | undefined) => {
  try {
    const videoId = extractYouTubeVideoId(musicUrl);

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
