import { axiosInstanceWithToken } from '../instances';
import { Channel } from '../../src/types/channel';

export const getAllchannelList = async () => {
  try {
    const response = await axiosInstanceWithToken.get('/channels');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getChannelById = async (channelId: string) => {
  try {
    const response = await axiosInstanceWithToken.get(`/channels/${channelId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createChannel = async () => {
  try {
    const response = await axiosInstanceWithToken.post('/channels');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateChannel = async (channelId: string, channel: Channel) => {
  try {
    const response = await axiosInstanceWithToken.patch(`/channels/${channelId}`, { data: channel });
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

export const getMusicsByChannelId = async (channelId: string | undefined) => {
  try {
    const response = await axiosInstanceWithToken.get(`/channels/${channelId}/musics`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
