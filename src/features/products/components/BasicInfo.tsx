import React from 'react';
import { Grid, Typography, Stack, Divider } from '@mui/material';
import {
  styleSubtitle,
  styleH4,
  styleBody,
  numberWithCommas,
} from '../../../constansts';

interface BasicInfoProps {
  detail?: any;
}

export default function BasicInfo({ detail }: BasicInfoProps) {
  return (
    <Grid item xs={6}>
      <Stack spacing={2}>
        <Typography variant="h4" sx={styleH4}>
          상품 상세 정보
        </Typography>
        <Divider />
        <Stack spacing={0}>
          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              상품 번호 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.productId}
            </Typography>
          </Stack>

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              상품 이름 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.name}
            </Typography>
          </Stack>
          {/*  */}

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              상품 설명 :
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {detail.description}
            </Typography>
          </Stack>
          {/*  */}

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              상품 가격:
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {numberWithCommas(detail.price)}
            </Typography>
          </Stack>
          {/*  */}

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              할인율:
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {`${detail.discountRate}%`}
            </Typography>
          </Stack>
          {/*  */}

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              진행 시간:
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {`${detail.runningTime}분`}
            </Typography>
          </Stack>
          {/*  */}

          {/*  */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" sx={styleSubtitle}>
              진행 횟수:
            </Typography>
            <Typography variant="body2" sx={styleBody}>
              {`${detail.progressNumber}회`}
            </Typography>
          </Stack>
          {/*  */}
        </Stack>
      </Stack>
    </Grid>
  );
}
