/* eslint-disable import/no-cycle */
import { configureAuth } from 'react-query-auth';
import { axios } from './axios';
import {
  loginWithEmailAndPassword,
  LoginDTO,
  UserResponse,
} from '../features/auth';

import storage from '../utils/storage';

async function handleUserResponse(data: UserResponse) {
  const { token, user } = data;
  storage.setToken(token);
  return user;
}

async function loginFn(data: LoginDTO) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({
    userFn: () => axios.get('/me'),
    loginFn: (credentials: LoginDTO) =>
      axios.post('users/auth/login', credentials),
    registerFn: (credentials) => axios.post('/register', credentials),
    logoutFn: () => axios.post('/logout'),
  });
