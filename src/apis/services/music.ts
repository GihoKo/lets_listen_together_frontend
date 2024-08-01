import { axiosInstanceWithToken } from '../instances';

export const getMusicById = async (musicId: string) => {
  try {
    const response = await axiosInstanceWithToken.get(`/musics/${musicId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export interface CreateMusicData {
  channelId: string;
  title: string;
  artist: string;
  url: string;
}

export const createMusic = async (music: CreateMusicData) => {
  try {
    const response = await axiosInstanceWithToken.post('/musics', music);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export interface UpdateMusicData {
  channelId: string;
  title: string;
  artist: string;
  url: string;
}

export const updateMusic = async (musicId: string, music: UpdateMusicData) => {
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
