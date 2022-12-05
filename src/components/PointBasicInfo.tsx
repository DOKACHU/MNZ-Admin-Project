/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Grid, TextField, Autocomplete } from '@mui/material';
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
  const statusArr = [
    { label: '추가', id: 'add' },
    { label: '차감', id: 'sub' },
  ];
  return (
    <MainSubCard title="기본정보">
      <Grid item xs={12}>
        <TextField
          helperText="포인트 번호"
          size="small"
          id="outlined-basic1"
          fullWidth
          // label="Name"
          onChange={onChange}
          value={detail?.pointEventId}
          disabled
          // defaultValue={user?.name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          helperText="유저 번호"
          size="small"
          id="outlined-basic1"
          fullWidth
          name="userId"
          onChange={onChange}
          value={detail?.userId}
          //   disabled
          // defaultValue={user?.name}
        />
      </Grid>
      <Grid item md={12} xs={12}>
        <Autocomplete
          disableClearable
          options={statusArr}
          value={detail?.status || '없음'}
          // onChange={(e, newValue) => {
          //   setCreateInfo({ ...createInfo, status: newValue.id });
          // }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="상태"
              name="status"
              fullWidth
              // onChange={handleCreateChange}
              size="small"
            />
          )}
        />
        {/* value={detail?.pointEventId} */}
        {/* <TextField
          helperText="상태"
          size="small"
          id="outlined-basic6"
          fullWidth
          name="status"
          onChange={onChange}
          value={detail?.status}
          //   onChange={handleChange}
        /> */}
      </Grid>
      <Grid item xs={12}>
        <TextField
          helperText="사유"
          size="small"
          id="outlined-basic1"
          fullWidth
          name="reason"
          onChange={onChange}
          value={detail?.reason}
          //   disabled
          // defaultValue={user?.name}
        />
      </Grid>

      <Grid item md={12} xs={12}>
        <TextField
          helperText="포인트"
          size="small"
          id="outlined-basic6"
          fullWidth
          name="price"
          onChange={onChange}
          value={detail?.price}
        />
      </Grid>
    </MainSubCard>
  );
}
