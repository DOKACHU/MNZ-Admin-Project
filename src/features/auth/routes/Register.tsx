/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../../layouts';
import { RegisterDTO } from '../api/register';
import { useRegister } from '../../../lib/auth';

export default function Register() {
  const { control, handleSubmit, reset } = useForm<any>();
  const navigate = useNavigate();
  const { mutateAsync } = useRegister();

  const handleRoute = () => {
    navigate('/auth/login');
  };

  const onSubmit = async (data: RegisterDTO) => {
    console.log({ data });
    // const result = await mutateAsync({ data });
    // reset(result as any);
    // handleClose();
  };

  return (
    <AuthLayout title="회원가입" onSubmit={handleSubmit(onSubmit)}>
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
          가입 완료
        </Button>
        <Button onClick={handleRoute}> 로그인으로 이동 </Button>
      </Grid>
    </AuthLayout>
  );
}
