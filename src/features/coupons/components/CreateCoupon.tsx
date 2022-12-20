/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Drawer, TextField, Box, Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type CreateCouponProps = {
  open: boolean;
  onClose: () => void;
};

export default function CreateCoupon({ open, onClose }: CreateCouponProps) {
  return (
    <Drawer
      ModalProps={{
        keepMounted: false,
      }}
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          width: '500px',
          p: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              helperText="쿠폰 이름"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="title"
              //   onChange={handleCreateChange}
              //   value={createInfo.title}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              helperText="쿠폰 설명"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="description"
              //   onChange={handleCreateChange}
              //   value={createInfo.description}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              helperText="할인율"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="discountRate"
              //   onChange={handleCreateChange}
              //   value={createInfo.discountRate}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              helperText="할인 가격"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="discountPrice"
              //   value={createInfo.discountPrice}
              //   onChange={handleCreateChange}
            />
          </Grid>
          <Grid item xs={12}>
            <DatePicker
              // views={['day']}
              inputFormat="YYYY-MM-DD"
              value=""
              onChange={(newValue) => {
                // setCreateInfo({
                //   ...createInfo,
                //   closePeriod: dayjs(newValue),
                // });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  size="small"
                  helperText="시작 기간"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <DatePicker
              // views={['day']}
              inputFormat="YYYY-MM-DD"
              value=""
              onChange={(newValue) => {
                // setCreateInfo({
                //   ...createInfo,
                //   closePeriod: dayjs(newValue),
                // });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  size="small"
                  helperText="만료 기간"
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
}
