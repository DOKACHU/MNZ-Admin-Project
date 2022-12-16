/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';

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
  TextField,
  CircularProgress,
  Autocomplete,
  Button,
} from '@mui/material';
import {
  CalendarTodayTwoTone,
  PhoneAndroidTwoTone,
  EmailTwoTone,
} from '@mui/icons-material';
import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DetailTemplate } from '../template';
import { MainDetailForm, MainSubCard } from '../components';
import { bookTab, BOOK_BASE_API, convertDay, convertTime } from '../constansts';
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

const bookingStatusArr = [
  { label: '예약 취소', id: 'cancel' },
  { label: '예약 대기', id: 'wait' },
  { label: '예약 성공', id: 'success' },
];

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

function codeAtStr(value: string) {
  if (value === 'cancel') {
    return 'error';
  }
  if (value === 'wait') {
    return 'wait';
  }
  if (value === 'success') {
    return 'success';
  }
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

export default function BookDetail() {
  const {
    fetchPostDetail,
    isLoading,
    handleChange,
    setFetchPostDetail,
    setToggle,
    toggle,
  } = useGetDetail({
    BaseURL: BOOK_BASE_API,
    UpdateInit: '',
  });

  const [value, setValue] = useState<number>(0);

  const [dayValue, setDayValue] = useState(new Date('2022-12-07'));

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  console.log({ startDate, endDate });

  const handleTabChange = (e: any, newValue: any) => {
    setValue(newValue);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  console.log({ fetchPostDetail });
  // console.log({ dayValue });

  const seletedValue = bookingStatusArr.filter(
    (v: any) => v.id === fetchPostDetail?.status
  )[0]?.label;

  const seletedId = bookingStatusArr.filter(
    (v: any) => v.id === fetchPostDetail?.status
  )[0]?.id;

  const color = codeAtStr(seletedId || '');

  console.log({ color, seletedValue });

  const handleSubmit = () => {
    setFetchPostDetail({
      ...fetchPostDetail,
      bookingDate: dayValue,
    });
  };

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <DetailTemplate
      updateText="예약 수정"
      cancelText="예약 취소"
      loading={isLoading}
      title="예약 상세"
      isButton
      onSubmit={handleSubmit}
      updateModalForm={
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                orientation="landscape"
                openTo="day"
                value={dayValue}
                componentsProps={{
                  actionBar: {
                    actions: ['today'],
                  },
                }}
                onChange={(newValue: any) => {
                  setDayValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="time"
              label="Alarm clock"
              type="time"
              size="small"
              defaultValue="09:00"
              name="startTime"
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              fullWidth
              helperText="예약 시작 시간 "
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="time"
              label="Alarm clock"
              type="time"
              size="small"
              name="endTime"
              onChange={handleChange}
              defaultValue="18:00"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              fullWidth
              helperText="예약 마감 시간 "
            />
          </Grid>
        </Grid>
      }
      extra={
        <>
          {fetchPostDetail?.isCancel && (
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
          )}
        </>
      }
    >
      <MainDetailForm
        updateDateText={`마지막 업데이트 : ${'2022-04-07'}`}
        createDateText=""
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
                              {fetchPostDetail?.userName}
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
                                {fetchPostDetail?.bookingId}
                              </Typography>
                            </Stack>
                            {/*  */}
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
                                {convertDay(fetchPostDetail?.bookingDate)}
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
                                예약 시작 시간:
                              </Typography>
                              <Typography variant="body2">
                                {convertTime(fetchPostDetail?.startTime)}
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
                                예약 마감 시간:
                              </Typography>
                              <Typography variant="body2">
                                {convertTime(fetchPostDetail?.endTime)}
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
                              <Typography variant="body2">{`${fetchPostDetail?.runningTime}분`}</Typography>
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
                            <Typography variant="body2">{`${fetchPostDetail?.round}회`}</Typography>
                          </Stack>
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                          >
                            <Typography variant="subtitle1" sx={styleSubtitle}>
                              예약 상태 :
                            </Typography>
                            {toggle ? (
                              <>
                                <Autocomplete
                                  sx={{ width: 150 }}
                                  disableClearable
                                  options={bookingStatusArr}
                                  // onChange={(e) => {
                                  //   handleChange(e);
                                  // }}
                                  onSelect={(e) => {
                                    // setToggle(false);
                                    handleChange(e);
                                  }}
                                  value={seletedValue}
                                  renderInput={(params: any) => (
                                    <TextField
                                      {...params}
                                      label=""
                                      name="status"
                                      fullWidth
                                      size="small"
                                    />
                                  )}
                                />

                                <Button
                                  size="small"
                                  variant="outlined"
                                  onClick={() => setToggle(false)}
                                >
                                  확인
                                </Button>
                              </>
                            ) : (
                              <>
                                {color && (
                                  <Chip
                                    sx={{
                                      cursor: 'pointer',
                                    }}
                                    onClick={handleToggle}
                                    label={seletedValue}
                                    variant="outlined"
                                    size="small"
                                    // color={color}
                                    // color="success"
                                  />
                                )}
                              </>
                            )}
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
                                {fetchPostDetail?.proId}
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
                              <Typography variant="body2">
                                {fetchPostDetail?.proName}
                              </Typography>
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
                                {fetchPostDetail?.centerId}
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
