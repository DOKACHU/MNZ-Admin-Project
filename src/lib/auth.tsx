import { initReactQueryAuth } from '@tanstack/react-query-auth';

import { CircularProgress } from '@mui/material';
import {
  loginWithEmailAndPassword,
  AuthUser,
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

const authConfig = {
  loginFn,
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
  unknown,
  LoginDTO
>(authConfig);
