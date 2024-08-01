import { axiosInstanceWithToken } from '../instances';
import { Music } from '@/types/music';

export const getAllchannelLists = async () => {
  try {
    const response = await axiosInstanceWithToken.get('/channels');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getChannelById = async (channelId: string | undefined) => {
  try {
    const response = await axiosInstanceWithToken.get(`/channels/${channelId}`);
    console.log('response:', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createChannel = async (channel: FormData) => {
  try {
    const response = await axiosInstanceWithToken.post('/channels', channel, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateChannel = async (channelId: string, channel: FormData) => {
  try {
    const response = await axiosInstanceWithToken.patch(`/channels/${channelId}`, channel, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteChannel = async (channelId: string) => {
  try {
    const response = await axiosInstanceWithToken.delete(`/channels/${channelId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const subscribeChannel = async (channelId: string, userId: string | undefined) => {
  try {
    const response = await axiosInstanceWithToken.post(`/channels/${channelId}/subscribe`, { userId });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const unsubscribeChannel = async (channelId: string, userId: string | undefined) => {
  try {
    const response = await axiosInstanceWithToken.post(`/channels/${channelId}/unsubscribe`, { userId });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMusicsByChannelId = async (channelId: string | undefined) => {
  try {
    const response = await axiosInstanceWithToken.get(`/channels/${channelId}/musics`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const updateMusicListOrder = async (musicList: Music[]) => {
  try {
    const response = await axiosInstanceWithToken.patch('/channels/music-order', musicList);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
