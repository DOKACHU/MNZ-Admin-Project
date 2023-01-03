import React from 'react';
import { Grid, Typography, Stack, Divider } from '@mui/material';
import { styleSubtitle, styleH4, styleBody } from '../../../constansts';

interface BasicInfoProps {
  detail?: any;
}

export default function BasicInfo({ detail }: BasicInfoProps) {
  console.log({ detail });
  return (
    <Grid item xs={6}>
      <Stack spacing={2}>
        <Typography variant="h4" sx={styleH4}>
          센터 상세 정보
        </Typography>
        <Divider />
        <Stack spacing={0}>
          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              센터 번호 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.centerId}
            </Typography>
          </Stack>

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              센터 이름 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.name}
            </Typography>
          </Stack>
          {/*  */}

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              센터 설명 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.description}
            </Typography>
          </Stack>
          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              센터 주소 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.address}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
}
