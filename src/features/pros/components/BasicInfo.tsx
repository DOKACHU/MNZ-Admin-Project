import React from 'react';
import { Grid, Typography, Stack, Divider } from '@mui/material';
import { styleSubtitle, styleH4, styleBody } from '../../../constansts';

interface BasicInfoProps {
  detail?: any;
}

export default function BasicInfo({ detail }: BasicInfoProps) {
  return (
    <Grid item xs={6}>
      <Stack spacing={2}>
        <Typography variant="h4" sx={styleH4}>
          프로 상세 정보
        </Typography>
        <Divider />
        <Stack spacing={0}>
          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              프로 번호 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.proId}
            </Typography>
          </Stack>

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              프로 이름 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.name}
            </Typography>
          </Stack>
          {/*  */}

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              핸드폰 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.phoneNumber}
            </Typography>
          </Stack>
          {/*  */}

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              소개 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.description}
            </Typography>
          </Stack>
          {/*  */}
        </Stack>
      </Stack>
    </Grid>
  );
}
