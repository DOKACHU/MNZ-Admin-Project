import { initReactQueryAuth } from 'react-query-auth';

import { CircularProgress } from '@mui/material';
import {
  //   loginWithEmailAndPassword,
  getUser,
  //   registerWithEmailAndPassword,
  UserResponse,
  //   LoginCredentialsDTO,
  //   RegisterCredentialsDTO,
  AuthUser,
} from '../features/auth';
import storage from '../utils/storage';

async function handleUserResponse(data: UserResponse) {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
}

async function loadUser() {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
  }
  return null;
}

async function loginFn() {
  // const response = await loginWithEmailAndPassword(data);
  // const user = await handleUserResponse(response);
  // return user;
  return '';
}

async function registerFn() {
  // const response = await registerWithEmailAndPassword(data);
  // const user = await handleUserResponse(response);
  // return user;
  return '';
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  },
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
  AuthUser | null,
  unknown
  // LoginCredentialsDTO,
  // RegisterCredentialsDTO
>(authConfig as any);
