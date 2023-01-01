/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
  other?: any;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Grid container spacing={2} display="row" alignItems="center">
            {children}
          </Grid>
        </Box>
      )}
    </div>
  );
}

export function useDetailTab() {
  const [value, setValue] = useState<number>(0);

  const handleTabChange = (e: any, newValue: any) => {
    setValue(newValue);
  };

  return {
    value,
    handleTabChange,
    TabPanel,
  };
}
