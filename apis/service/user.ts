import { UserId } from '../../src/types/user';
import { instanceIncludeToken } from '../instances';

export const getMyChannelList = async (userId: UserId) => {
  try {
    const response = await instanceIncludeToken.get(`/users/myChannels/${userId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
