/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Grid, Button, TextField, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Drawer, UploadImage } from '../../../components';
// import { useCreateBookings, CreateBookingDTO } from '../api';

type CreateCouponProps = {
  open: boolean;
  onClose: () => void;
};

export default function CreatePros({ open, onClose }: CreateCouponProps) {
  // const { mutateAsync } = useCreateBookings();
  const { control, handleSubmit } = useForm<any>();
  // const [startDate, setStartDate] = useState(dayjs(''));

  // const onSubmit = async (data: CreateBookingDTO['data']) => {
  //   await mutateAsync({ data });
  // };

  return (
    <Drawer
      title="프로 생성 모달"
      open={open}
      onClose={onClose}
      // onSubmit={handleSubmit(onSubmit)}
      renderHeader={
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button type="button" variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      }
    >
      <Grid item xs={12}>
        <Controller
          name="center.name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="프로 이름"
              fullWidth
              size="small"
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="center.description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="프로 설명"
              fullWidth
              size="small"
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="center.address"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="핸드폰 번호"
              fullWidth
              size="small"
            />
          )}
        />
      </Grid>
    </Drawer>
  );
}
