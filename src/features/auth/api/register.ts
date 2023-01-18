import { axios } from '../../../lib/axios';

import { UserResponse } from '../types';

export type RegisterDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const registerWithEmailAndPassword = (
  data: RegisterDTO
): Promise<UserResponse> => {
  return axios.post('/auth/register', data);
};
