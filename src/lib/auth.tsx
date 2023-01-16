/* eslint-disable import/no-cycle */
import { configureAuth } from 'react-query-auth';

import {
  loginWithEmailAndPassword,
  LoginDTO,
  UserResponse,
} from '../features/auth';
import storage from '../utils/storage';
import { axios } from './axios';

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

export const { AuthLoader, useLogin } = configureAuth({
  userFn: () => axios.get('/me'),
  loginFn: (credentials) => axios.post('/login', credentials),
  registerFn: (credentials) => axios.post('/register', credentials),
  logoutFn: () => axios.post('/logout'),
});
