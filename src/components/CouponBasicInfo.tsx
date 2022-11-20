/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';
import MainSubCard from './MainSubCard';

interface CouponBasicInfoProps {
  detail?: any;
  onChange?: any;
}

export default function CouponBasicInfo({
  detail,
  onChange,
}: CouponBasicInfoProps) {
  // const [value, setValue] = useState(dayjs('2022-04-07'));

  return (
    <MainSubCard title="기본정보">
      <Grid item xs={12}>
        <TextField
          helperText="쿠폰 번호"
          size="small"
          id="outlined-basic1"
          fullWidth
          // label="Name"
          onChange={onChange}
          value={detail?.coupon_id}
          disabled
          // defaultValue={user?.name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          helperText="쿠폰 이름"
          size="small"
          id="outlined-basic1"
          fullWidth
          name="title"
          onChange={onChange}
          value={detail?.title}
          //   disabled
          // defaultValue={user?.name}
        />
      </Grid>

      <Grid item md={12} xs={12}>
        <TextField
          helperText="쿠폰 설명"
          size="small"
          id="outlined-basic6"
          fullWidth
          name="description"
          onChange={onChange}
          value={detail?.description}
          //   onChange={handleChange}
        />
      </Grid>

      <Grid item md={12} xs={12}>
        <TextField
          helperText="할인율"
          size="small"
          id="outlined-basic6"
          fullWidth
          name="discountRate"
          onChange={onChange}
          value={detail?.discountRate}
          //   onChange={handleChange}
        />
      </Grid>

      <Grid item md={12} xs={12}>
        <TextField
          helperText="할인 가격"
          size="small"
          id="outlined-basic6"
          fullWidth
          name="discountPrice"
          onChange={onChange}
          value={detail?.discountPrice}
        />
      </Grid>
      <Grid item md={12} xs={12}>
        {/* <DatePicker
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
        /> */}
      </Grid>
    </MainSubCard>
  );
}
