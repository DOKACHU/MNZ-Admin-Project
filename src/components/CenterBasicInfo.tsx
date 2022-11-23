/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import MainSubCard from './MainSubCard';

interface CenterBasicInfoProps {
  detail?: any;
}

export default function CentwerBasicInfo({ detail }: CenterBasicInfoProps) {
  const [value, setValue] = useState(dayjs('2022-04-07'));

  return (
    <MainSubCard title="기본정보">
      <Grid item xs={12}>
        <TextField
          helperText="병원 번호"
          size="small"
          id="outlined-basic1"
          fullWidth
          // label="Name"
          value={detail?.centerId}
          disabled
          // defaultValue={user?.name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          helperText="병원 이름"
          size="small"
          id="outlined-basic1"
          fullWidth
          // label="Name"
          value={detail?.name}
          //   disabled
          // defaultValue={user?.name}
        />
      </Grid>

      <Grid item md={12} xs={12}>
        <TextField
          size="small"
          id="outlined-basic6"
          fullWidth
          name="address"
          value={detail?.address}
          //   onChange={handleChange}
          helperText="주소"
        />
      </Grid>
      <Grid item md={12} xs={12}>
        <DatePicker
          views={['day']}
          label="Just date"
          inputFormat="YYYY-MM-DD"
          value={value}
          onChange={(newValue: any) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              size="small"
              helperText="임시 휴무일"
            />
          )}
        />
      </Grid>
    </MainSubCard>
  );
}
