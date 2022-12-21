/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import {
  Grid,
  Divider,
  Typography,
  TextField,
  Autocomplete,
  Button,
  Card,
  CardHeader,
  CardContent,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { mockTimeSlots } from '../types';

export default function CreateCharts() {
  const [dayValue, setDayValue] = useState(new Date('2022-12-07'));

  const [startDate, setStartDate] = useState('');
  const [nextDate, setNextDate] = useState(new Date('2022-12-07'));

  return (
    <Card sx={{ border: '1px solid #eceff1' }} elevation={0}>
      <CardHeader
        sx={{ p: 2.5 }}
        title={<Typography variant="h6">차트 작성</Typography>}
        action={<Button variant="contained">작성하기</Button>}
      />
      <Divider />

      <CardContent sx={{ p: 2 }}>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={12}>
            <TextField
              helperText="cx) 환자 증상"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="center.address"
              placeholder="환자 증상을 입력해주세요."
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              id="disabled-options-demo"
              options={mockTimeSlots}
              getOptionDisabled={(option) =>
                option === mockTimeSlots[0] || option === mockTimeSlots[2]
              }
              //   onSelect={handleChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  label="진료한 시간"
                  name="endTime"
                  size="small"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              helperText="tx)치료 내용"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="center.address"
              multiline
              rows={4}
              placeholder="치료 내용을 입력해주세요."
            />
          </Grid>
          <Grid item xs={6}>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
            <DatePicker
              label="다음 예약 일정"
              value={nextDate}
              inputFormat="YYYY-MM-DD"
              onChange={(newValue: any) => {
                setNextDate(newValue);
                // console.log({ newValue });
              }}
              renderInput={(params) => (
                <TextField {...params} size="small" fullWidth />
              )}
            />
            {/* </LocalizationProvider> */}
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              id="disabled-options-demo"
              options={mockTimeSlots}
              getOptionDisabled={(option) =>
                option === mockTimeSlots[0] || option === mockTimeSlots[2]
              }
              //   onSelect={handleChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  label="다음 예약 시간"
                  name="endTime"
                  size="small"
                />
              )}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
