/* eslint-disable react/button-has-type */
/* eslint-disable import/no-cycle */
import { Route, Routes, Navigate } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';
import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import { AuthLoader, useUser, useLogout } from '../../../lib/auth';

const style = {
  height: '100%',
  padding: 3,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

function UserInfo() {
  const user = useUser();
  const logout = useLogout();

  if (user.isLoading) {
    return <div>Loading ...</div>;
  }

  if (user.error) {
    return <div>{JSON.stringify(user.error, null, 2)}</div>;
  }

  if (!user.data) {
    return <div>Not logged in</div>;
  }

  return (
    <div>
      <div>Logged in as </div>
      <button type="button" disabled={logout.isLoading}>
        Log out
      </button>
    </div>
  );
}

export function AuthRoutes() {
  const [mode, setMode] = useState<'register' | 'login'>('register');

  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route
        path="login"
        element={
          <AuthLoader
            renderLoading={() => (
              <Box sx={style}>
                <CircularProgress />
              </Box>
            )}
            renderUnauthenticated={() => (
              <div>
                {mode === 'login' && (
                  <>
                    {/* <LoginForm /> */}
                    <button onClick={() => setMode('register')}>
                      Register
                    </button>
                  </>
                )}
                {mode === 'register' && (
                  <>
                    {/* <RegisterForm /> */}
                    <button onClick={() => setMode('login')}>Login</button>
                  </>
                )}
              </div>
            )}
          >
            <UserInfo />
          </AuthLoader>
        }
      />
    </Routes>
  );
}
