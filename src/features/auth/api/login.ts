import { axios } from '../../../lib/axios';
import { UserResponse } from '../types';

export type LoginDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = (
  data: LoginDTO
): Promise<UserResponse> => {
  // TODO : 어드민 로그인으로 변경 필요
  // const URL = 'https://api-dev.mnz-ai.com/users/auth/login';
  const URL = '/auth/login';
  return axios.post(URL, data);
};
