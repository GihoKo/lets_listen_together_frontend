import { axiosInstanceWithToken } from '../instances';

export const updateUser = async (userId: string | undefined, user: FormData) => {
  try {
    const response = await axiosInstanceWithToken.patch(`/users/${userId}`, user, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMyChannelList = async (userId: string | undefined) => {
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

export const getMyOwnChannels = async (userId: string | undefined) => {
  try {
    const response = await axiosInstanceWithToken.get(`/users/myOwnChannels/${userId}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getMySubscribedChannels = async (userId: string | undefined) => {
  try {
    const response = await axiosInstanceWithToken.get(`/users/mySubscribedChannels/${userId}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
