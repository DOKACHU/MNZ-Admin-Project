/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { TextField, Box, Grid, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { UpdateDiscussionDTO } from '../api';
import { Drawer } from '../../../components';

type CreateCouponProps = {
  proId: string;
  open: boolean;
  detail: any;
  handleClose: () => void;
};

export default function UpdateCoupon({
  proId,
  open,
  handleClose,
  detail,
}: CreateCouponProps) {
  // const { mutateAsync } = useUpdateCoupon({ proId });
  const { control, handleSubmit } = useForm<UpdateDiscussionDTO['data']>({
    defaultValues: {
      name: detail.name,
      description: detail.description,
      phoneNumber: detail.phoneNumber,
    },
  });

  const onSubmit = async (data: UpdateDiscussionDTO['data']) => {
    // await mutateAsync({ data, couponId });
    handleClose();
  };

  return (
    <Drawer
      title="프로 수정 모달"
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
            수정
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
