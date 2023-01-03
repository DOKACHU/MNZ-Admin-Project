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
          포인트 상세 정보
        </Typography>
        <Divider />
        <Stack spacing={0}>
          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              포인트 번호 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.pointEventId}
            </Typography>
          </Stack>

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              포인트 상태 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.status}
            </Typography>
          </Stack>
          {/*  */}

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              포인트 가격 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.price}
            </Typography>
          </Stack>
          {/*  */}

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              지급 이유 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.reason}
            </Typography>
          </Stack>
          {/*  */}

          {/*  */}

          {/*  */}
        </Stack>
      </Stack>
    </Grid>
  );
}
