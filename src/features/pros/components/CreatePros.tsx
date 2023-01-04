/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Grid, Button, TextField, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Drawer, UploadImage } from '../../../components';
import { useCreatePros, CreateProsDTO } from '../api';

type CreateCouponProps = {
  open: boolean;
  handleClose: () => void;
};

export default function CreatePros({ open, handleClose }: CreateCouponProps) {
  const { mutateAsync } = useCreatePros();
  const { control, handleSubmit } = useForm<CreateProsDTO['data']>();
  // const [startDate, setStartDate] = useState(dayjs(''));

  const onSubmit = async (data: CreateProsDTO['data']) => {
    const newData = {
      ...data,
      centerId: '3753b4df-0a3b-43bf-8d94-aceb1745cfe1',
    };
    await mutateAsync({ data: newData });
  };

  return (
    <Drawer
      title="프로 생성 모달"
      open={open}
      onClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
      renderHeader={
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button type="submit" variant="contained" sx={{ mr: 2 }}>
            생성
          </Button>
          <Button type="button" variant="outlined" onClick={handleClose}>
            취소
          </Button>
        </Box>
      }
    >
      <Grid item xs={12}>
        <Controller
          name="name"
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
          name="description"
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
          name="phoneNumber"
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
