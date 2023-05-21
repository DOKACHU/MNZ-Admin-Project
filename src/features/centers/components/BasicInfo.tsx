import React from 'react';
import { Grid, Typography, Stack, Divider, Box } from '@mui/material';
import {
  styleSubtitle,
  styleH4,
  styleBody,
  convertDate,
  dayOfWeeks,
} from '../../../constansts';
import { MainSubCard, UploadImage } from '../../../components';

interface BasicInfoProps {
  detail?: any;
}

export default function BasicInfo({ detail }: BasicInfoProps) {
  // console.log({ detail });
  return (
    <Grid container spacing={2} display="row" alignItems="center">
      <Grid item xs={6}>
        <MainSubCard title="세부 사항">
          {/*  */}
          <Grid item xs={12}>
            <Stack spacing={2}>
              <Typography variant="h4" sx={styleH4}>
                상세 정보
              </Typography>
              <Divider />
              <Stack spacing={0}>
                {/*  */}
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    센터 번호 :
                  </Typography>
                  <Typography variant="body2" sx={styleBody}>
                    {detail?.centerId}
                  </Typography>
                </Stack>

                {/*  */}
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    센터 이름 :
                  </Typography>
                  <Typography variant="body2" sx={styleBody}>
                    {detail?.name}
                  </Typography>
                </Stack>
                {/*  */}

                {/*  */}
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    센터 설명 :
                  </Typography>
                  <Typography variant="body2" sx={styleBody}>
                    {detail?.description}
                  </Typography>
                </Stack>
                {/*  */}
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    센터 주소 :
                  </Typography>
                  <Typography variant="body2" sx={styleBody}>
                    {detail?.address}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          {/*  */}
        </MainSubCard>
      </Grid>
      {/*  */}
      <Grid item xs={6}>
        <MainSubCard title="시간">
          <Grid item xs={12}>
            <Stack spacing={2}>
              <Typography variant="h4" sx={styleH4}>
                이미지 정보
              </Typography>
              <Divider />
              <UploadImage />
            </Stack>
          </Grid>
        </MainSubCard>
      </Grid>
      {/*  */}
      {/*  */}
      <Grid item xs={6}>
        <MainSubCard title="시간">
          {/*  */}
          <Grid item xs={12}>
            <Stack spacing={2}>
              <Typography variant="h4" sx={styleH4}>
                센터 상세 정보
              </Typography>
              <Divider />
              {detail.businessHours?.map((info, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderBottom: '1px dotted #e5e5e5',
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="subtitle1" sx={styleSubtitle}>
                        요일
                      </Typography>
                      <Typography variant="body2" sx={styleBody}>
                        {
                          dayOfWeeks.filter((week: any) => {
                            return week.dayOfWeek === info.dayOfWeek;
                          })[0].label
                        }
                      </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="subtitle1" sx={styleSubtitle}>
                        시작 시간:
                      </Typography>
                      <Typography variant="body2" sx={styleBody}>
                        {info.startTime === ''
                          ? '없음'
                          : convertDate(info.startTime)}
                      </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="subtitle1" sx={styleSubtitle}>
                        마감 시간:
                      </Typography>
                      <Typography variant="body2" sx={styleBody}>
                        {info.closeTime === ''
                          ? '없음'
                          : convertDate(info.closeTime)}
                      </Typography>
                    </Stack>
                  </Box>
                );
              })}
            </Stack>
          </Grid>
          {/*  */}
          {/*  */}
          <Grid item xs={12} />
        </MainSubCard>
      </Grid>
      {/*  */}
    </Grid>
  );
}
