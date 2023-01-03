/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import {
  Box,
  Grid,
  Divider,
  Typography,
  Stack,
  TableContainer,
  TableBody,
  TableHead,
  Table,
  TableRow,
  TableCell,
  Chip,
} from '@mui/material';
import {
  CalendarTodayTwoTone,
  PhoneAndroidTwoTone,
  EmailTwoTone,
} from '@mui/icons-material';
import { MainSubCard } from '../../../components';
import {
  styleSubtitle,
  styleH4,
  detailsIconSX,
  convertTime,
  convertDay,
} from '../../../constansts';

interface BasicInfoProps {
  detail?: any;
}
function createData(
  product: string,
  description: string,
  quantity: string,
  amount: string
  // total: string
) {
  return { product, description, quantity, amount };
}

const rows = [
  createData(
    '도수 1분',
    'lorem ipsum dolor sit amat, connecter adieu siccing eliot',
    '8',
    '80,000'
    // '$1200.00'
  ),
];

export default function BasicInfo({ detail }: BasicInfoProps) {
  return (
    <Grid container spacing={2} display="row" alignItems="center">
      <Grid item xs={12}>
        <MainSubCard title="세부 사항">
          {/*  */}
          <Grid item xs={12}>
            <Typography variant="h4" sx={styleH4}>
              고객 정보
            </Typography>
            <br />
            <Grid container spacing={3}>
              <Grid item>
                <Typography variant="body2">
                  <CalendarTodayTwoTone sx={detailsIconSX} />
                  {detail?.userName}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  <PhoneAndroidTwoTone sx={detailsIconSX} />
                  010-0000-0000
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  <EmailTwoTone sx={detailsIconSX} />
                  example@mail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/*  */}
          <Grid item xs={12}>
            <Divider />
          </Grid>

          {/*  */}
          <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={2}>
              <Typography variant="h4" sx={styleH4}>
                예약 정보
              </Typography>
              <Stack spacing={0}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    예약 번호 :
                  </Typography>
                  <Typography variant="body2">{detail?.bookingId}</Typography>
                </Stack>
                {/*  */}
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    예약 날짜 :
                  </Typography>
                  <Typography variant="body2">
                    {convertDay(detail?.bookingDate)}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    예약 시작 시간:
                  </Typography>
                  <Typography variant="body2">
                    {convertTime(detail?.startTime)}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    예약 마감 시간:
                  </Typography>
                  <Typography variant="body2">
                    {convertTime(detail?.endTime)}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    진행시간 :
                  </Typography>
                  <Typography variant="body2">{`${detail?.runningTime}분`}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={0} sx={{ mt: { xs: 0, md: 4 } }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="subtitle1" sx={styleSubtitle}>
                  치료 부위 :
                </Typography>
                <Typography variant="body2">어깨</Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="subtitle1" sx={styleSubtitle}>
                  치료 횟수 :
                </Typography>
                <Typography variant="body2">{`${detail?.round}회`}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="subtitle1" sx={styleSubtitle}>
                  예약 상태 :
                </Typography>
                <Chip
                  sx={{
                    cursor: 'pointer',
                  }}
                  variant="outlined"
                  size="small"
                  // color={color}
                  // color="success"
                />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item sm={6} md={4}>
            <Stack spacing={2}>
              <Typography variant="h4" sx={styleH4}>
                프로 정보
              </Typography>
              <Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    프로 ID :
                  </Typography>
                  <Typography variant="body2">{detail?.proId}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    프로 이름 :
                  </Typography>
                  <Typography variant="body2">{detail?.proName}</Typography>
                </Stack>
              </Stack>
              {/*  */}
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
          <Grid item sm={6} md={4}>
            <Stack spacing={2}>
              <Typography variant="h4" sx={styleH4}>
                센터 정보
              </Typography>
              <Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    병원 ID :
                  </Typography>
                  <Typography variant="body2">{detail?.centerId}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    병원 이름 :
                  </Typography>
                  <Typography variant="body2">인천 병원</Typography>
                </Stack>
              </Stack>
              {/*  */}
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
        </MainSubCard>
      </Grid>

      {/* 결제 내역 */}
      <Grid item xs={12}>
        <MainSubCard title="결제 내역">
          <Grid item xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ pl: 3 }}>상품 이름</TableCell>
                    <TableCell sx={{ pl: 3 }}>상품 설명 </TableCell>
                    <TableCell align="right">진행 횟수</TableCell>
                    <TableCell align="right">상품 가격</TableCell>
                    {/* <TableCell align="right">Total</TableCell> */}
                    <TableCell align="right" sx={{ pr: 3 }} />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ pl: 3 }}>
                        <Typography align="left" variant="subtitle1">
                          {row.product}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography align="left" variant="body2">
                          {row.description}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">{row.amount}</TableCell>
                      {/* <TableCell align="right">
                                    {row.total}
                                  </TableCell> */}
                      <TableCell sx={{ pr: 3 }} align="right">
                        {/* <IconButton color="primary" size="large">
                                      <DeleteTwoToneIcon />
                                    </IconButton> */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                p: 2,
                border: 'none',
                background: '#E3F2FD',
                borderRadius: 4,
              }}
            >
              <Grid container justifyContent="flex-end" spacing={3}>
                <Grid item sm={6} md={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Typography align="right" variant="subtitle1">
                            합 계 :
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography align="right" variant="body2">
                            $4725.00
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography align="right" variant="subtitle1">
                            부가 가치세 (10%) :
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography align="right" variant="body2">
                            $57.00
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography align="right" variant="subtitle1">
                            할인 (5%) :
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography align="right" variant="body2">
                            $45.00
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider sx={{ bgcolor: 'dark.main' }} />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Typography
                            align="right"
                            color="primary"
                            variant="subtitle1"
                          >
                            최종 합계 :
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            align="right"
                            color="primary"
                            variant="subtitle1"
                          >
                            $4827.00
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </MainSubCard>
      </Grid>

      {/*  */}
    </Grid>
  );
}
