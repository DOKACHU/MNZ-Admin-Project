/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';

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
import dayjs from 'dayjs';
import {
  CalendarTodayTwoTone,
  PhoneAndroidTwoTone,
  EmailTwoTone,
} from '@mui/icons-material';

import { DetailTemplate } from '../template';
import { MainDetailForm, MainSubCard } from '../components';
import { bookTab, CENTER_BASE_API } from '../constansts';
import { useGetDetail } from '../hooks';

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
  other?: any;
}

const detailsIconSX = {
  width: 15,
  height: 15,
  verticalAlign: 'text-top',
  mr: 0.5,
  mt: 0.25,
};

const styleH4 = {
  color: '#212121',
  fontSize: 14,
  fontWeight: 600,
};

const styleSubtitle = {
  color: '#212121',
  fontSize: 14,
  fontWeight: 500,
};

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

// function codeAtStr(code: string) {
//   if (code === '00') {
//     return 'error';
//   }
//   if (code === '01') {
//     return 'warning';
//   }
//   if (code === '02') {
//     return 'success';
//   }
// }

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
  // createData(
  //   'Landing Page',
  //   'lorem ipsum dolor sit amat, connecter adieu siccing eliot',
  //   '7',
  //   '$100.00',
  //   '$700.00'
  // ),
  // createData(
  //   'Admin Template',
  //   'lorem ipsum dolor sit amat, connecter adieu siccing eliot',
  //   '5',
  //   '$150.00',
  //   '$750.00'
  // ),
];

export default function BookDetail() {
  const { fetchPostDetail, isLoading } = useGetDetail({
    BaseURL: CENTER_BASE_API,
  });
  const [value, setValue] = useState<number>(0);
  // const [date, setDate] = useState(dayjs('2022-04-07'));
  // const [date, setDate] = useState(() => dayjs('2022-02-01T00:00'));

  const handleTabChange = (e: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <DetailTemplate
      updateText="예약 수정"
      cancelText="예약 취소"
      loading={isLoading}
      title="예약 상세페이지"
      isButton
      extra={
        <Chip
          sx={{
            fontSize: 12,
            marginLeft: 2,
          }}
          label="예약 취소"
          size="small"
          color="error"
          variant="outlined"
        />
      }
    >
      <MainDetailForm
        subtitle1={`마지막 업데이트 : ${'2022-04-07'}`}
        subtitle2=""
        tabs={bookTab}
        value={value}
        onTabChange={handleTabChange}
      >
        {bookTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.id === 0 && (
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
                              고민구
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
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                예약 번호 :
                              </Typography>
                              <Typography variant="body2">
                                000001-TXT
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                예약 날짜 :
                              </Typography>
                              <Typography variant="body2">
                                YYYY-MM-DD
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                진행시간 :
                              </Typography>
                              <Typography variant="body2">30분</Typography>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Grid>

                      <Grid item xs={12} sm={6} md={4}>
                        <Stack spacing={0} sx={{ mt: { xs: 0, md: 4 } }}>
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                          >
                            <Typography variant="subtitle1" sx={styleSubtitle}>
                              치료 부위 :
                            </Typography>
                            <Typography variant="body2">어깨</Typography>
                          </Stack>

                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                          >
                            <Typography variant="subtitle1" sx={styleSubtitle}>
                              치료 횟수 :
                            </Typography>
                            <Typography variant="body2">1/8</Typography>
                          </Stack>
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                          >
                            <Typography variant="subtitle1" sx={styleSubtitle}>
                              예약 상태 :
                            </Typography>
                            <Chip
                              label="예약 성공"
                              variant="outlined"
                              size="small"
                              color="success"
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
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                프로 ID :
                              </Typography>
                              <Typography variant="body2">
                                30a12e6e-f726-4514-8da4-2ab45bbf959b
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                프로 이름 :
                              </Typography>
                              <Typography variant="body2">김도카츄</Typography>
                            </Stack>
                          </Stack>
                          {/*  */}
                          <Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                주소 :
                              </Typography>
                              <Typography variant="body2">
                                00시 00구 00로
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                전화번호 :
                              </Typography>
                              <Typography variant="body2">
                                +1 (070) 123-4567
                              </Typography>
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
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                병원 ID :
                              </Typography>
                              <Typography variant="body2">
                                3753b4df-0a3b-43bf-8d94-aceb1745cfe1
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                병원 이름 :
                              </Typography>
                              <Typography variant="body2">인천 병원</Typography>
                            </Stack>
                          </Stack>
                          {/*  */}
                          <Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                주소 :
                              </Typography>
                              <Typography variant="body2">
                                00시 00구 00로
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                전화번호 :
                              </Typography>
                              <Typography variant="body2">
                                +1 (070) 123-4567
                              </Typography>
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
                                    <Typography
                                      align="left"
                                      variant="subtitle1"
                                    >
                                      {row.product}
                                    </Typography>
                                  </TableCell>
                                  <TableCell>
                                    <Typography align="left" variant="body2">
                                      {row.description}
                                    </Typography>
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.quantity}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.amount}
                                  </TableCell>
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
                                      <Typography
                                        align="right"
                                        variant="subtitle1"
                                      >
                                        합 계 :
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                      <Typography align="right" variant="body2">
                                        $4725.00
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                      <Typography
                                        align="right"
                                        variant="subtitle1"
                                      >
                                        부가 가치세 (10%) :
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                      <Typography align="right" variant="body2">
                                        $57.00
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                      <Typography
                                        align="right"
                                        variant="subtitle1"
                                      >
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
              )}
              {tab.id === 1 && (
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <MainSubCard title="진료 차트">
                      <Grid item xs={12}>
                        {/* TODO: autoncomplete */}
                        <TableContainer>
                          <Table>
                            <TableHead>
                              <TableRow>
                                {/* <TableCell sx={{ pl: 3 }} /> */}
                                <TableCell>진료 번호</TableCell>
                                <TableCell>진료 날짜</TableCell>
                                <TableCell>회차 </TableCell>
                                <TableCell>증상</TableCell>
                                <TableCell>치료 내용</TableCell>
                                <TableCell>다음 예약</TableCell>
                              </TableRow>
                            </TableHead>
                          </Table>
                        </TableContainer>
                      </Grid>
                    </MainSubCard>
                  </Grid>
                </Grid>
              )}
            </TabPanel>
          );
        })}
      </MainDetailForm>
    </DetailTemplate>
  );
}
