/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { AuthLayout } from '../../../layouts';
import { useLogin } from '../../../lib/auth';
import { LoginDTO } from '../api/login';

export default function Login() {
  const { control, handleSubmit, reset } = useForm<any>();

  const navigate = useNavigate();
  const { mutateAsync } = useLogin();

  const onSubmit = async (data: LoginDTO) => {
    console.log({ data });
    // const result = await mutateAsync({ data });
    // reset(result as any);
    // handleClose();
  };

  const handleRoute = () => {
    navigate('/auth/register');
  };

  return (
    <AuthLayout title="로그인" onSubmit={handleSubmit(onSubmit)}>
      <Grid item xs={12}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField {...field} helperText="이메일" fullWidth size="small" />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="패스워드"
              fullWidth
              size="small"
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Button type="submit" variant="contained">
          로그인
        </Button>
        <Button onClick={handleRoute}> 회원가입으로 이동 </Button>
      </Grid>
    </AuthLayout>
  );
}
