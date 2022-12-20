/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Drawer, TextField, Box, Grid, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useForm, Controller } from 'react-hook-form';
import { useCreateCoupon, CreateCouponsDTO } from '../api';

type CreateCouponProps = {
  open: boolean;
  onClose: () => void;
};

export default function CreateCoupon({ open, onClose }: CreateCouponProps) {
  const createcCouponMutation = useCreateCoupon();
  const { control, handleSubmit } = useForm<CreateCouponsDTO['data']>();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = async (data: CreateCouponsDTO['data']) => {
    await createcCouponMutation.mutateAsync({ data });
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button type="submit">Submit</Button>
            </Grid>
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

            <Grid item xs={12}>
              <Controller
                name="discountRate"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    helperText="할인율"
                    fullWidth
                    size="small"
                  />
                )}
              />
            </Grid>

            {/* <Grid item xs={12}>
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
            </Grid> */}
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

            {/* <Grid item xs={12}>
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
            </Grid> */}
          </Grid>
        </form>
      </Box>
    </Drawer>
  );
}
