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
}
