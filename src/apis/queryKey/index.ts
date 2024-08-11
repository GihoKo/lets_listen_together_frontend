interface QueryKeys {
  channels: {
    allChannels: string[];
    channel: (channelId: string | undefined) => (string | undefined)[];
    myChannels: (userId: string | undefined) => (string | undefined)[];
    myOwnChannels: (userId: string | undefined) => (string | undefined)[];
    mySubscribedChannels: (userId: string | undefined) => (string | undefined)[];
  };
  musicList: {
    allMusicList: (string | undefined)[];
    music: (musicId: string | undefined) => (string | undefined)[];
  };
  user: {
    myUser: (string | undefined)[];
    user: (userId: string | undefined) => (string | undefined)[];
  };
  auth: {
    tokens: (string | undefined)[];
  };
  youtube: {
    videoData: (musicUrl: string | undefined) => (string | undefined)[];
  };
}

const queryKeys: QueryKeys = {
  channels: {
    allChannels: ['channels'],
    channel: (channelId: string | undefined) => ['channels', 'channel', channelId],
    myChannels: (userId: string | undefined) => ['channels', 'myChannels', userId],
    myOwnChannels: (userId: string | undefined) => ['channels', 'myChannels', userId, 'myOwnChannels'],
    mySubscribedChannels: (userId: string | undefined) => ['channels', 'myChannels', userId, 'mySubscribedChannels'],
  },
  musicList: {
    allMusicList: ['musicList'],
    music: (musicId: string | undefined) => ['musicList', 'music', musicId],
  },
  user: {
    myUser: ['user'],
    user: (userId: string | undefined) => ['user', userId],
  },
  auth: {
    tokens: ['auth', 'tokens'],
  },
  youtube: {
    videoData: (musicUrl: string | undefined) => ['youtube', 'videoData', musicUrl],
  },
};

export default queryKeys;
