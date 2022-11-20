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
  Avatar,
  CardHeader,
  Autocomplete,
  TableContainer,
  TableBody,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TextField,
  Chip,
} from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker, CalendarPicker } from '@mui/x-date-pickers';
import { DetailTemplate } from '../template';
import { MainDetailForm, MainSubCard } from '../components';
import { bookTab, CENTER_BASE_API, mockCountries } from '../constansts';
import { useGetDetail } from '../hooks';

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
  other?: any;
}

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

function codeAtStr(code: string) {
  if (code === '00') {
    return 'error';
  }
  if (code === '01') {
    return 'warning';
  }
  if (code === '02') {
    return 'success';
  }
}

function createData(
  product: string,
  description: string,
  quantity: string,
  amount: string,
  total: string
) {
  return { product, description, quantity, amount, total };
}

const rows = [
  createData(
    'Logo Design',
    'lorem ipsum dolor sit amat, connecter adieu siccing eliot',
    '6',
    '$200.00',
    '$1200.00'
  ),
  createData(
    'Landing Page',
    'lorem ipsum dolor sit amat, connecter adieu siccing eliot',
    '7',
    '$100.00',
    '$700.00'
  ),
  createData(
    'Admin Template',
    'lorem ipsum dolor sit amat, connecter adieu siccing eliot',
    '5',
    '$150.00',
    '$750.00'
  ),
];

export default function BookDetail() {
  const { fetchPostDetail, isLoading } = useGetDetail({
    BaseURL: CENTER_BASE_API,
  });
  const [value, setValue] = useState<number>(0);
  // const [date, setDate] = useState(dayjs('2022-04-07'));
  const [date, setDate] = useState(() => dayjs('2022-02-01T00:00'));

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
          label="예약 확인"
          color="success"
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
              {tab.label === 'info' && (
                <Grid container spacing={2} display="row" alignItems="center">
                  <Grid item xs={5}>
                    <MainSubCard title="고객 정보">
                      <Grid item xs={12}>
                        {/* <Card elevation={0}> */}
                        <CardHeader
                          sx={
                            {
                              // bgcolor: '#e5e5e5',
                            }
                          }
                          avatar={
                            <Avatar
                              sx={{ bgcolor: '#e5e5e5' }}
                              aria-label="recipe"
                            >
                              P
                            </Avatar>
                          }
                          // action={}
                          title="[User] 고민수"
                          subheader="8회 도수치료 패키지"
                        />
                        {/* </Card> */}
                      </Grid>
                    </MainSubCard>
                  </Grid>
                  <Grid item xs={2}>
                    <Autocomplete
                      options={mockCountries}
                      autoHighlight
                      clearIcon={false}
                      defaultValue={mockCountries[0]}
                      getOptionLabel={(option: any) => option.label}
                      renderOption={(props, option: any) => (
                        <li
                          {...props}
                          style={{
                            fontSize: 15,
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <Chip
                            sx={{
                              fontSize: 15,
                            }}
                            label={option.label}
                            color={codeAtStr(option.code)}
                            variant="outlined"
                          />
                        </li>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          // label="Choose a country"
                          inputProps={{
                            ...params.inputProps,
                            // autoComplete: 'new-password', // disable autocomplete and autofill
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <MainSubCard title="프로 정보">
                      <Grid item xs={12}>
                        {/* <Card elevation={0}> */}
                        <CardHeader
                          sx={
                            {
                              // bgcolor: '#e5e5e5',
                            }
                          }
                          avatar={
                            <Avatar
                              sx={{ bgcolor: '#e5e5e5' }}
                              aria-label="recipe"
                            >
                              P
                            </Avatar>
                          }
                          // action={}
                          title="[Pro] 김프로"
                          subheader="도수치료 특성"
                        />
                        {/* </Card> */}
                      </Grid>
                    </MainSubCard>
                  </Grid>
                  <Grid item xs={12}>
                    <MainSubCard title="예약 일정">
                      <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <StaticDatePicker
                            onChange={(newValue: any) => setDate(newValue)}
                            value={date}
                            inputFormat="YYYY-MM-DD"
                            toolbarFormat="YYYY-MM-DD"
                            renderInput={(params: any) => (
                              <TextField {...params} />
                            )}
                            componentsProps={{
                              actionBar: {
                                actions: ['today'],
                              },
                            }}
                          />
                        </LocalizationProvider>

                        {/* <CalendarPicker
                          date={date}
                          onChange={(newDate: any) => setDate(newDate)}
                        /> */}
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {/* TODO: timpicker 수정 필요  */}
                        <TextField
                          id="time"
                          // label="Alarm clock"
                          type="time"
                          size="small"
                          defaultValue="00:00"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 900, // 5 min
                          }}
                          fullWidth
                          helperText="예약 시간"
                        />
                      </Grid>
                    </MainSubCard>
                  </Grid>
                </Grid>
              )}
              {tab.label === 'chart' && (
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
              {tab.label === 'payment' && (
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <MainSubCard title="결제 내역">
                      <Grid item xs={12}>
                        <TableContainer>
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell sx={{ pl: 3 }}>
                                  Description
                                </TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="right">Total</TableCell>
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
                                  <TableCell align="right">
                                    {row.total}
                                  </TableCell>
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
                                        Sub Total :
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
                                        Taxes (10%) :
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
                                        Discount (5%) :
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
                                        Total :
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
                </Grid>
              )}
            </TabPanel>
          );
        })}
      </MainDetailForm>
    </DetailTemplate>
  );
}