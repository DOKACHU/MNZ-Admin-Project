/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';
import MainSubCard from './MainSubCard';

interface ReviewBasicInfoProps {
  detail?: any;
}

export default function ReviewBasicInfo({ detail }: ReviewBasicInfoProps) {
  // const [value, setValue] = useState(dayjs('2022-04-07'));

  return (
    <MainSubCard title="기본 정보">
      <Grid item xs={12}>
        <TextField
          helperText="리뷰 번호"
          size="small"
          id="outlined-basic1"
          fullWidth
          // label="Name"
          value={detail?.review_id}
          disabled
          // defaultValue={user?.name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          helperText="리뷰 타입"
          size="small"
          id="outlined-basic1"
          fullWidth
          // label="Name"
          value={detail?.type}
          //   disabled
          // defaultValue={user?.name}
        />
      </Grid>

      <Grid item md={12} xs={12}>
        <TextField
          helperText="쿠폰 내용"
          size="small"
          id="outlined-basic6"
          fullWidth
          name="address"
          value={detail?.content}
          //   onChange={handleChange}
        />
      </Grid>
    </MainSubCard>
  );
}
