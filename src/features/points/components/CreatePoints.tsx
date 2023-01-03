/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Grid, Button, TextField, Box, Radio } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Drawer, UploadImage } from '../../../components';
// import { useCreateBookings, CreateBookingDTO } from '../api';

type CreateCouponProps = {
  open: boolean;
  onClose: () => void;
};

export default function CreatePoints({ open, onClose }: CreateCouponProps) {
  // const { mutateAsync } = useCreateBookings();
  const { control, handleSubmit } = useForm<any>();
  // const [startDate, setStartDate] = useState(dayjs(''));

  // const onSubmit = async (data: CreateBookingDTO['data']) => {
  //   await mutateAsync({ data });
  // };

  return (
    <Drawer
      title="포인트 생성 모달"
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
            <TextField {...field} helperText="고객 ID" fullWidth size="small" />
          )}
        />
      </Grid>

      <Grid item sm={12}>
        <Radio
          // checked={createInfo?.status === 'add'}
          // onChange={handleCreateChange}
          value="add"
          name="status"
          // inputProps={{ 'aria-label': 'A' }}
        />
        지급
        <Radio
          // checked={createInfo?.status === 'sub'}
          // onChange={handleCreateChange}
          value="sub"
          name="status"
          // inputProps={{ 'aria-label': 'B' }}
        />
        차감
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="point"
          control={control}
          render={({ field }) => (
            <TextField {...field} helperText="포인트" fullWidth size="small" />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="requestComment"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="사유"
              fullWidth
              multiline
              rows={4}
              size="small"
            />
          )}
        />
      </Grid>
    </Drawer>
  );
}
