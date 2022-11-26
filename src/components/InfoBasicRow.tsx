import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

const detailsIconSX = {
  width: 15,
  height: 15,
  verticalAlign: 'text-top',
  mr: 0.5,
  mt: 0.25,
};

const styleH4 = {
  color: '#212121',
  fontSize: 14,
  fontWeight: 600,
};

const styleSubtitle = {
  color: '#212121',
  fontSize: 14,
  fontWeight: 500,
};

interface InfoBasicRowProps {
  title: string;
  detail: any;
}

export default function InfoBasicRow({ title, detail }: InfoBasicRowProps) {
  return (
    <Grid item sm={6} md={4}>
      <Stack spacing={2}>
        <Typography variant="h4" sx={styleH4}>
          {title || '제목 없음'}
        </Typography>
        <Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              ID :
            </Typography>
            <Typography variant="body2">
              30a12e6e-f726-4514-8da4-2ab45bbf959b
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              이름 :
            </Typography>
            <Typography variant="body2">김도카츄</Typography>
          </Stack>
        </Stack>
        <Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              주소 :
            </Typography>
            <Typography variant="body2">00시 00구 00로</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              전화번호 :
            </Typography>
            <Typography variant="body2">+1 (070) 123-4567</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
}
