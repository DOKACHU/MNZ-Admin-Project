/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Grid, Button, TextField, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Drawer, UploadImage } from '../../../components';
import { useCreateCenters, CreateCentersDTO } from '../api';

type CreateCouponProps = {
  open: boolean;
  onClose: () => void;
};

export default function CreateCenters({ open, onClose }: CreateCouponProps) {
  const { mutateAsync } = useCreateCenters();
  const { control, handleSubmit } = useForm<CreateCentersDTO['data']>();
  // const [startDate, setStartDate] = useState(dayjs(''));

  const onSubmit = async (data: CreateCentersDTO['data']) => {
    console.log({ data });

    // await mutateAsync({ data });
  };

  return (
    <Drawer
      title="센터 생성 모달"
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
          <Button type="submit" variant="contained" sx={{ mr: 2 }}>
            생성
          </Button>
          <Button type="button" variant="outlined" onClick={onClose}>
            취소
          </Button>
        </Box>
      }
    >
      <Grid item xs={12}>
        {/* <Controller
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
        /> */}
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="center.name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="센터 이름"
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
              helperText="센터 설명"
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
              helperText="센터 주소"
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
              helperText="센터 주소"
              fullWidth
              size="small"
            />
          )}
        />
      </Grid>

      {/* <Grid item xs={12}>
        <Controller
          name="requestComment"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="요청 사항"
              fullWidth
              multiline
              rows={4}
              size="small"
            />
          )}
        />
      </Grid> */}

      <Grid item xs={12}>
        <UploadImage />
        {/* <Controller
          name="requestComment"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="요청사항"
              fullWidth
              multiline
              rows={4}
            />
          )}
        /> */}
      </Grid>
    </Drawer>
  );
}
