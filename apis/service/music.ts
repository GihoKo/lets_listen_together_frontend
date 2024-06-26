import { instanceIncludeToken } from '../instances';
import { MusicRequestData } from '../../src/pages/Main/Channel/_types/interface';

export const getMusicById = async (musicId: string) => {
  try {
    const response = await instanceIncludeToken.get(`/musics/${musicId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createMusic = async (music: MusicRequestData) => {
  try {
    const response = await instanceIncludeToken.post('/musics', music);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateMusic = async (musicId: string, music: MusicRequestData) => {
  try {
    const response = await instanceIncludeToken.patch(`/musics/${musicId}`, music);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteMusic = async (musicId: string) => {
  try {
    const response = await instanceIncludeToken.delete(`/musics/${musicId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
