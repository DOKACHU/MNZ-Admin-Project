/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../../layouts';

export default function Register() {
  const { control, handleSubmit, reset } = useForm<any>();
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate('/auth/login');
  };

  return (
    <AuthLayout title="회원가입">
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
        <Button variant="contained">가입 완료</Button>
        <Button onClick={handleRoute}> 로그인으로 이동 </Button>
      </Grid>
    </AuthLayout>
  );
}
