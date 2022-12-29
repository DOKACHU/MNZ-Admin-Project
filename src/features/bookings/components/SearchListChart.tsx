import React, { Suspense } from 'react';
import {
  Grid,
  Typography,
  Stack,
  TextField,
  Pagination,
  Box,
} from '@mui/material';
import { CustomSubCard } from '../../../components';
import { styleH4, styleSubtitle } from '../types';
import { useModal } from '../../../hooks';

export default function SearchListChart() {
  const { open, handleToggle } = useModal();
  return (
    <>
      <Grid item xs={12}>
        <TextField
          helperText=""
          size="small"
          id="outlined-basic1"
          fullWidth
          placeholder="검색할 키워드를 입력해주세요."
          name="comment"
        />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Pagination count={10} color="primary" />
        </Box>
      </Grid>
      <Suspense fallback={<>Loading...</>}>
        <CustomSubCard title="YYYY - MM월 진료 차트" onToggle={handleToggle}>
          {open && (
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Stack
                  spacing={2}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: '1px dotted #000',
                  }}
                >
                  <Typography variant="h4" sx={styleH4}>
                    1회차
                  </Typography>
                  <Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="subtitle1" sx={styleSubtitle}>
                        Cx (환자 증상) :
                      </Typography>
                      <Typography variant="body2">마음이 아픕니다.</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="subtitle1" sx={styleSubtitle}>
                        Tx (치료 내용) :
                      </Typography>
                      <Typography variant="body2">
                        13:30 도수치료 진행
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="subtitle1" sx={styleSubtitle}>
                        Nx (다음 예약) :
                      </Typography>
                      <Typography variant="body2">
                        12. 02(목) 통증치료 예정
                      </Typography>
                    </Stack>

                    {/*  */}
                    <Stack
                      spacing={2}
                      sx={{
                        p: 1,
                        mt: 1,
                        borderRadius: 2,
                        border: '1px dotted #000',
                      }}
                    >
                      <Typography variant="caption">
                        2022-12-02 14:00
                      </Typography>
                      <Typography variant="caption">
                        진료 진행하면서 해당 환자에 압력 세기를 4로 경감시켰음.
                      </Typography>
                    </Stack>
                    {/*  */}
                  </Stack>
                  {/*  */}
                  <Grid item xs={12}>
                    <TextField
                      helperText=""
                      size="small"
                      id="outlined-basic1"
                      fullWidth
                      placeholder="진료 관련 코멘트를 남겨주세요."
                      name="comment"
                    />
                  </Grid>
                </Stack>
              </Grid>
              {/*  */}
            </Grid>
          )}
        </CustomSubCard>
      </Suspense>
    </>
  );
}
