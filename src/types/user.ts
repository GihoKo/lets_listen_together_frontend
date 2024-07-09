export interface User {
  id: string;
  email: string;
  nickName: string;
  profileImage: string;
}

export type UserId = Pick<User, 'id'>;

export type UserEmail = Pick<User, 'email'>;

export type UserNickName = Pick<User, 'nickName'>;

export type UserProfileImage = Pick<User, 'profileImage'>;
