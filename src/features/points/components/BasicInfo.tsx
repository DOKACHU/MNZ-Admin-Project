import React from 'react';
import { Grid, Typography, Stack, Divider } from '@mui/material';
import {
  styleSubtitle,
  styleH4,
  styleValue,
  convertDate,
  numberWithCommas,
} from '../../../constansts';
import { MainSubCard } from '../../../components';

interface BasicInfoProps {
  detail?: any;
}

export default function BasicInfo({ detail }: BasicInfoProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MainSubCard title="세부 사항">
          <Grid item xs={6}>
            <Stack spacing={2}>
              <Typography variant="h4" sx={styleH4}>
                포인트 지급 정보
              </Typography>
              <Divider />
              <Stack spacing={0}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    포인트 상태 :
                  </Typography>
                  <Typography variant="body2" sx={styleValue}>
                    {detail?.status === 'add' ? '지급' : '차감'}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    사유:
                  </Typography>
                  <Typography variant="body2" sx={styleValue}>
                    {detail?.reason}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    포인트 :
                  </Typography>
                  <Typography variant="body2" sx={styleValue}>
                    {numberWithCommas(Number(detail?.price))}P
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    생성 일시 :
                  </Typography>
                  <Typography variant="body2" sx={styleValue}>
                    {convertDate(detail?.createdAt)}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={2}>
              <Typography variant="h4" sx={styleH4}>
                유저 정보
              </Typography>
              <Divider />
              <Stack spacing={0}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    유저 번호 :
                  </Typography>
                  <Typography variant="body2" sx={styleValue}>
                    {detail?.userId}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    이름 :
                  </Typography>
                  <Typography variant="body2" sx={styleValue}>
                    테스트
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </MainSubCard>
      </Grid>
    </Grid>
  );
}
