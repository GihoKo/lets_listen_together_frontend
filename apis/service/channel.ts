import { defaultInstance } from '../instances';
import { Channel } from '../../src/components/types/interface';

export const getAllchannelList = async () => {
  try {
    const response = await defaultInstance.get('/channels');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getChannelById = async (channelId: string) => {
  try {
    const response = await defaultInstance.get(`/channels/${channelId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createChannel = async () => {
  try {
    const response = await defaultInstance.post('/channels');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateChannel = async (channelId: string, channel: Channel) => {
  try {
    const response = await defaultInstance.patch(`/channels/${channelId}`, { data: channel });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteChannel = async (channelId: string) => {
  try {
    const response = await defaultInstance.delete(`/channels/${channelId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
