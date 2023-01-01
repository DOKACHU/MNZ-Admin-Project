/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Box } from '@mui/material';

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
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
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
