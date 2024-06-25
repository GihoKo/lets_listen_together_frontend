import { UserId } from '../../src/store/useUserStore';
import { defaultInstance } from '../instances';

export const getMyChannelList = async (userId: UserId) => {
  try {
    const response = await defaultInstance.get(`/users/myChannels/${userId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
