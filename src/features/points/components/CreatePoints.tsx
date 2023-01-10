/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  Grid,
  Button,
  TextField,
  Box,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Drawer, UploadImage } from '../../../components';
import { useCreatePoint, CreatePointsDTO } from '../api';

type CreateCouponProps = {
  open: boolean;
  handleClose: () => void;
};

const StyleRadio = {
  display: 'flex',
  alignItems: 'center',
};

export default function CreatePoints({ open, handleClose }: CreateCouponProps) {
  const { mutateAsync } = useCreatePoint();
  const { control, handleSubmit, reset } = useForm<CreatePointsDTO['data']>();
  // const [startDate, setStartDate] = useState(dayjs(''));

  const onSubmit = async (data: CreatePointsDTO['data']) => {
    const newData = {
      ...data,
      price: Number(data.price),
      // userId: '482363c5-f160-4c97-952d-d9f4d73e92ca',
    };

    const result = await mutateAsync({ data: newData });
    reset(result as any);
    handleClose();
  };

  return (
    <Drawer
      title="포인트 생성 모달"
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
      {/* <Grid item xs={12}>
        <Controller
          name="center.name"
          control={control}
          render={({ field }) => (
            <TextField {...field} helperText="고객 ID" fullWidth size="small" />
          )}
        />
      </Grid> */}

      <Grid item sm={12}>
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <RadioGroup {...field}>
              <Box sx={StyleRadio}>
                <Radio value="add" />
                <Typography>지급</Typography>
              </Box>
              <Box sx={StyleRadio}>
                <Radio value="sub" />
                <Typography>차감</Typography>
              </Box>
            </RadioGroup>
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <TextField {...field} helperText="가격" fullWidth size="small" />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="reason"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="지급 사유"
              fullWidth
              multiline
              rows={4}
              size="small"
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="userId"
          control={control}
          render={({ field }) => (
            <TextField {...field} helperText="유저 ID" fullWidth size="small" />
          )}
        />
      </Grid>
    </Drawer>
  );
}
