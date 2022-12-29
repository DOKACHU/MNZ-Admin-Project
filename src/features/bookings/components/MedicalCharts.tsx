import React, { Suspense } from 'react';
import { Grid } from '@mui/material';
import CreateCharts from './CreateCharts';
import SearchListChart from './SearchListChart';

export default function MedicalCharts() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <CreateCharts />
      </Grid>
      <Grid item xs={7}>
        {/* <Suspense fallback={<>Loadingg...</>}> */}
        <SearchListChart />
        {/* </Suspense> */}
      </Grid>
    </Grid>
  );
}
