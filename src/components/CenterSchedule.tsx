/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Grid, TextField, Button, Autocomplete } from '@mui/material';
import MainSubCard from './MainSubCard';

const init = [
  {
    day: 'init',
    startTime: 'init',
    endTime: 'init',
  },
];

const top100Films = [
  { label: '월', id: 1 },
  { label: '화', id: 2 },
  { label: '수', id: 3 },
  { label: '목', id: 4 },
  { label: '금', id: 5 },
  { label: '토', id: 6 },
  { label: '일', id: 7 },
];

export default function CenterSchedule() {
  const [addItem, setAddItem] = useState(init);

  const handleAddChange = () => {
    setAddItem([
      ...addItem,
      {
        day: 'test',
        startTime: 'test',
        endTime: 'test',
      },
    ]);
  };
  return (
    <MainSubCard title="영업 시간">
      <Grid item xs={12}>
        <Button variant="contained" size="small" onClick={handleAddChange}>
          영업 시간 추가
        </Button>
      </Grid>

      {addItem.map((item: any) => {
        return (
          <>
            <Grid item md={2} xs={12}>
              <Autocomplete
                disableClearable
                options={top100Films}
                defaultValue={top100Films[0]}
                renderInput={(params) => (
                  <TextField {...params} label="" fullWidth size="small" />
                )}
              />
            </Grid>

            <Grid item md={5} xs={12}>
              <TextField
                id="time"
                label="Alarm clock"
                type="time"
                size="small"
                defaultValue="09:00"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                fullWidth
                helperText="시작 시간 "
              />
            </Grid>
            <Grid item md={5} xs={12}>
              <TextField
                id="time"
                label="Alarm clock"
                type="time"
                size="small"
                defaultValue="18:00"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                fullWidth
                helperText="마감 시간 "
              />
            </Grid>
          </>
        );
      })}
    </MainSubCard>
  );
}
