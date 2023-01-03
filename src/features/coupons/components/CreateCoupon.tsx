/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { TextField, Box, Grid, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useForm, Controller } from 'react-hook-form';
import { useCreateCoupon, CreateCouponsDTO } from '../api';
import { Drawer } from '../../../components';

type CreateCouponProps = {
  open: boolean;
  onClose: () => void;
};

export default function CreateCoupon({ open, onClose }: CreateCouponProps) {
  const { mutateAsync } = useCreateCoupon();
  const { control, handleSubmit } = useForm<CreateCouponsDTO['data']>();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = async (data: CreateCouponsDTO['data']) => {
    await mutateAsync({ data });
  };

  return (
    <Drawer
      title="쿠폰 생성 모달"
      open={open}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
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
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="쿠폰 이름"
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
              helperText="쿠폰 설명"
              fullWidth
              size="small"
            />
          )}
        />
      </Grid>

      {/* TODO: 둘중 하나 보여주기  */}
      <Grid item xs={12}>
        <Controller
          name="discountRate"
          control={control}
          render={({ field }) => (
            <TextField {...field} helperText="할인율" fullWidth size="small" />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="discountPrice"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="할인 가격"
              fullWidth
              size="small"
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="startPeriod"
          control={control}
          render={({ field: { onChange, ...restField } }) => (
            <DatePicker
              inputFormat="YYYY-MM-DD"
              onChange={(newValue: any) => {
                setStartDate(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  helperText="시작 기간"
                  fullWidth
                  value={startDate}
                  size="small"
                />
              )}
              {...restField}
            />
          )}
        />
      </Grid>
    </Drawer>
  );
}
