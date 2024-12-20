export enum ModalType {
  EDIT_MUSIC = 'EDIT_MUSIC',
  CREATE_MUSIC = 'CREATE_MUSIC',
  DELETE_MUSIC = 'DELETE_MUSIC',
  CREATE_CHANNEL = 'CREATE_CHANNEL',
  EDIT_CHANNEL = 'EDIT_CHANNEL',
  DELETE_CHANNEL = 'DELETE_CHANNEL',
  SUBSCRBE_CHANNEL = 'SUBSCRBE_CHANNEL',
  UNSUBSCRIBE_CHANNEL = 'UNSUBSCRIBE_CHANNEL',
}

export enum ErrorMessagesType {
  // 채널 태그
  TAG_EMPTY = '태그를 입력하세요.',
  TAG_LENGTH = '태그는 10자 이내로 입력하세요.',
  TAG_LIMIT = '태그는 5개까지만 입력 가능합니다.',
  TAG_DUPLICATE = '이미 추가된 태그입니다.',

  // 채널
  CHANNEL_EDIT_PERMISSION = '채널 수정 권한이 없습니다.',
  CHANNEL_NAME_EMPTY = '채널 이름을 입력하세요.',
  CHANNEL_DESCRIPTION_EMPTY = '채널 설명을 입력하세요.',
  CHANNEL_TAG_EMPTY = '채널 태그를 입력하세요.',

  // 음악
  MUSIC_EDIT_PERMISSION = '채널의 주인만 음악을 수정할 수 있습니다.',
  MUSIC_CREATE_PERMISSION = '채널의 주인만 음악을 추가할 수 있습니다.',
  MUSIC_TITLE_EMPTY = '음악 제목을 입력해주세요.',
  MUSIC_ARTIST_EMPTY = '아티스트 이름을 입력해주세요.',
  MUSIC_URL_EMPTY = '음악 URL을 입력해주세요.',
  MUSIC_URL_UNVALID = '유효하지 않은 URL입니다.',
}

export enum zIndex {
  MODAL = 1000,
  MODAL_DIMMED = 999,
  MODAL_CONTENT = 998,
  SIDEBAR = 100,
}

export enum LastVisitedPageType {
  MAIN = '/main',
  CHANNEL = '/main/channel',
  CHANNEL_CREATE = '/main/channel/create',
  CHANNEL_EDIT = '/main/channel/edit',
  MUSIC_LIST = '/main/channel/:channelId/musics',
  MUSIC_DETAIL = '/main/channel/:channelId/musics/:musicId',
  CACHE_TIME = 1 * 60 * 1000, // 1분
}
