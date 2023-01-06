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
  Checkbox,
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
  convertDate,
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
              유저 정보
            </Typography>
            <br />
            <Grid container spacing={3}>
              <Grid item>
                <Typography variant="body2">
                  <CalendarTodayTwoTone sx={detailsIconSX} />
                  {detail?.userId}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  <PhoneAndroidTwoTone sx={detailsIconSX} />
                  {detail?.phoneNumber}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  <EmailTwoTone sx={detailsIconSX} />
                  {detail?.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/*  */}
          <Grid item xs={12}>
            <Divider />
          </Grid>

          {/*  */}

          <Grid item sm={6} md={4}>
            <Stack spacing={2}>
              <Typography variant="h4" sx={styleH4}>
                추가 정보
              </Typography>
              <Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    SNS 타입 :
                  </Typography>
                  <Typography variant="body2">{detail?.snsType}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    성별 :
                  </Typography>
                  <Typography variant="body2">
                    {detail?.gender === 1 ? '남' : '여'}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    동의 여부 :
                  </Typography>
                  <Typography variant="body2">
                    <Checkbox checked={detail?.termAgree} />
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle1" sx={styleSubtitle}>
                    가입일 :
                  </Typography>
                  <Typography variant="body2">
                    {convertDate(detail?.createdAt)}
                  </Typography>
                </Stack>
              </Stack>
              {/*  */}
            </Stack>
          </Grid>

          {/*  */}
        </MainSubCard>
      </Grid>

      {/* 결제 내역 */}
      <Grid item xs={12}>
        <MainSubCard title="결제 내역">
          <Grid item xs={12}>
            <Typography variant="h4" sx={styleH4}>
              예약 내역
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>예약 번호</TableCell>
                    <TableCell>센터 이름</TableCell>
                    <TableCell>프로 이름</TableCell>
                    <TableCell>상품 이름</TableCell>
                    <TableCell align="right">진행 횟수</TableCell>
                    <TableCell align="right">진행 시간</TableCell>
                    {/* <TableCell align="right">Total</TableCell> */}
                    <TableCell align="right" sx={{ pr: 3 }} />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/*  */}

                  {detail.bookings.map((row: any, index: number) => (
                    <TableRow key={index}>
                      <TableCell sx={{ pl: 3 }}>
                        <Typography align="left" variant="subtitle1">
                          {row.bookingId}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography align="left" variant="body2">
                          {row.centerName}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography align="left" variant="body2">
                          {row.proName}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography align="left" variant="body2">
                          {row.productName}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">{`${row.round} 회`}</TableCell>
                      <TableCell align="right">{`${row.runningTime} 분`}</TableCell>
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

          {/* <Grid item xs={12}>
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
          </Grid> */}
        </MainSubCard>
      </Grid>

      {/*  */}
    </Grid>
  );
}
