import React from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../../layouts';
// import { useLogin } from '../../../lib/auth';

export default function Login() {
  // const {  } = useLogin();

  const navigate = useNavigate();

  const handleRoute = () => {
    navigate('/auth/register');
  };

  // if (isLoggingIn) {
  //   return <div>로딩중 ....</div>;
  // }

  return (
    <AuthLayout title="로그인">
      {/* email */}
      <Grid item xs={12}>
        <TextField helperText="이메일" fullWidth size="small" />
      </Grid>

      {/* password */}
      <Grid item xs={12}>
        <TextField helperText="패스워드" fullWidth size="small" />
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained">로그인</Button>
        <Button onClick={handleRoute}> 회원가입으로 이동 </Button>
      </Grid>
    </AuthLayout>
  );
}
