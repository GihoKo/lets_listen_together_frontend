import { defaultInstance } from '../instance';

export const getChannelList = async () => {
  try {
    const response = await defaultInstance.get('/channels');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
