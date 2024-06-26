import { instanceIncludeToken } from '../instances';
import { Channel } from '../../src/types/channel';

export const getAllchannelList = async () => {
  try {
    const response = await instanceIncludeToken.get('/channels');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getChannelById = async (channelId: string) => {
  try {
    const response = await instanceIncludeToken.get(`/channels/${channelId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createChannel = async () => {
  try {
    const response = await instanceIncludeToken.post('/channels');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateChannel = async (channelId: string, channel: Channel) => {
  try {
    const response = await instanceIncludeToken.patch(`/channels/${channelId}`, { data: channel });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteChannel = async (channelId: string) => {
  try {
    const response = await instanceIncludeToken.delete(`/channels/${channelId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
