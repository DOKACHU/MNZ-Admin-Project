/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Grid, Button, TextField, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Drawer } from '../../../components';
import { useCreateBookings, CreateBookingDTO } from '../api';

type CreateCouponProps = {
  open: boolean;
  onClose: () => void;
};

export default function CreateBookings({ open, onClose }: CreateCouponProps) {
  const { mutateAsync } = useCreateBookings();
  const { control, handleSubmit } = useForm<CreateBookingDTO['data']>();
  const [startDate, setStartDate] = useState(dayjs(''));

  const onSubmit = async (data: CreateBookingDTO['data']) => {
    await mutateAsync({ data });
  };

  return (
    <Drawer
      title="예약 생성 모달"
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
          name="startTime"
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
                  helperText="시작 시간"
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

      <Grid item xs={12}>
        <Controller
          name="requestComment"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="요청사항"
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
