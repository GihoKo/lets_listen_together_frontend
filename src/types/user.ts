export interface User {
  id?: string;
  email?: string;
  nickName?: string;
  profileImage?: string;
}

export type UserId = Pick<User, 'id'>;
