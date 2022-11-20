/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';

import {
  Box,
  Grid,
  CardContent,
  Typography,
  Avatar,
  CardHeader,
  Autocomplete,
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
        subtitle1={`마지막 업데이트 : ${new Date()}`}
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
                            sx={{
                              innerHeight: '300px',
                            }}
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
                    <MainSubCard title="진료 차트" />
                  </Grid>
                </Grid>
              )}
              {tab.label === 'payment' && (
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <MainSubCard title="결제 내역">
                      <CardContent>
                        <Grid item xs={12}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                              <Typography variant="subtitle1">
                                2014-2017
                              </Typography>
                              <Typography variant="subtitle2">
                                Master Degree
                              </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                              <Typography variant="subtitle1">
                                Master Degree in Computer Application
                              </Typography>
                              <Typography variant="subtitle2">
                                University of Oxford, England
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </CardContent>
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
