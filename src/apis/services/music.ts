import { Music } from '@/types/music';
import { axiosInstanceWithToken } from '../instances';

export const getMusicById = async (musicId: string) => {
  try {
    const response = await axiosInstanceWithToken.get(`/musics/${musicId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createMusic = async (music: Music) => {
  try {
    const response = await axiosInstanceWithToken.post('/musics', music);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateMusic = async (musicId: string, music: Music) => {
  // user가 channel owner인지 확인
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
