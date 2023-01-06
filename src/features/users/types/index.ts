import { BaseEntity } from '../../../types';

export type UserType = {
  userId: string;
  email: string;
  password: string;
  phoneNumber: string;
  snsType: 'email';
  gender: number;
  age: number;
  pType: string;
  termAgree: boolean;
} & BaseEntity;

export type ServerUserType = {
  total_count: number;
  userList: UserType[];
};
