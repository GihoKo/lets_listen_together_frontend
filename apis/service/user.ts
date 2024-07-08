import { UserId } from '../../src/types/user';
import { axiosInstanceWithToken } from '../instances';

export const getMyChannelList = async (userId: UserId | undefined) => {
  try {
    const response = await axiosInstanceWithToken.get(`/users/myChannels/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMyUser = async (userId: UserId) => {
  try {
    const response = await axiosInstanceWithToken.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
