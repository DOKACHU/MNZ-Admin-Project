import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { ContentLayout } from '../../layouts';
// import { useAuth } from '../../lib/auth';
export default function Dashboard() {
  // const { user } = useAuth();
  // console.log({ user });

  return (
    <ContentLayout title="Dashboard">
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Card
          elevation={0}
          sx={{
            p: 3,
          }}
        >
          <Typography>이름 : </Typography>
          <Typography>권한 : </Typography>
          <Typography>접속 일시: </Typography>
          {/* <Typography>a</Typography> */}
        </Card>
      </Box>
    </ContentLayout>
  );
}
