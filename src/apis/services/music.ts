import { axiosInstanceWithToken } from '../instances';
import { MusicRequestData } from '../../pages/Main/Channel/_types/interface';

export const getMusicById = async (musicId: string) => {
  try {
    const response = await axiosInstanceWithToken.get(`/musics/${musicId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createMusic = async (music: MusicRequestData) => {
  try {
    const response = await axiosInstanceWithToken.post('/musics', music);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateMusic = async (musicId: string, music: MusicRequestData) => {
  try {
    const response = await axiosInstanceWithToken.patch(`/musics/${musicId}`, music);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteMusic = async (musicId: string) => {
  try {
    const response = await axiosInstanceWithToken.delete(`/musics/${musicId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
