/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Grid, Button, TextField, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import Select from 'react-select';

import { Drawer } from '../../../components';

type CreateProductsProps = {
  open: boolean;
  onClose: () => void;
};

export default function CreateProducts({ open, onClose }: CreateProductsProps) {
  const { control, handleSubmit } = useForm<any>();
  const [startDate, setStartDate] = useState(dayjs(''));

  return (
    <Drawer
      title="상품 생성 모달"
      open={open}
      onClose={onClose}
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
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText="상품이름"
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
              helperText="상품설명"
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
          name="price"
          control={control}
          render={({ field }) => (
            <TextField {...field} helperText="가격" fullWidth size="small" />
          )}
        />
      </Grid>

      <Grid item xs={6}>
        <Controller
          name="runningTime"
          render={({ field }) => (
            <>
              <Select
                {...field}
                options={[
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' },
                ]}
              />
              <label>진행시간</label>
            </>
          )}
          control={control}
          defaultValue=""
        />
      </Grid>

      <Grid item xs={6}>
        <Controller
          name="progressNumber"
          render={({ field }) => (
            <>
              <Select
                {...field}
                options={[
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' },
                ]}
              />
              <label>진행횟수</label>
            </>
          )}
          control={control}
          defaultValue=""
        />
      </Grid>

      {/* TODO: 프로, 센터 검색  */}
    </Drawer>
  );
}
