import { User, UserId } from '../../src/types/user';
import { axiosInstanceWithToken } from '../instances';

export const updateUser = async (userId: string | undefined, user: User | null) => {
  try {
    const response = await axiosInstanceWithToken.patch(`/users/${userId}`, user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMyChannelList = async (userId: UserId | undefined) => {
  try {
    const response = await axiosInstanceWithToken.get(`/users/myChannels/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMyUser = async (userId: string) => {
  try {
    const response = await axiosInstanceWithToken.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMyOwnChannels = async (userId: string) => {
  try {
    const response = await axiosInstanceWithToken.get(`/users/myOwnChannels/${userId}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
