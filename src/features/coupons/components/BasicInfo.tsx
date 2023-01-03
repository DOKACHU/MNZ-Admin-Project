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
          쿠폰 상세 정보
        </Typography>
        <Divider />
        <Stack spacing={0}>
          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              쿠폰 번호 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.couponId}
            </Typography>
          </Stack>

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              쿠폰 이름 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.title}
            </Typography>
          </Stack>
          {/*  */}

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              쿠폰 설명 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.description}
            </Typography>
          </Stack>
          {/*  */}

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              할인율 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.discountRate}
            </Typography>
          </Stack>
          {/*  */}

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              할인가격 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.discountPrice}
            </Typography>
          </Stack>
          {/*  */}
        </Stack>
      </Stack>
    </Grid>
  );
}
