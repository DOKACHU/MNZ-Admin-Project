/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-key */
import { useState } from 'react';

import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Tabs,
  Tab,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface MainDetailFormProps {
  value?: number;
  tabs?: any;
  children?: React.ReactNode;
  updateDateText?: string;
  createDateText?: string;
  onTabChange?: () => void;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MainDetailForm({
  value,
  children,
  tabs,
  onTabChange,
  updateDateText,
  createDateText,
}: MainDetailFormProps) {
  return (
    <Card
      sx={{
        padding: 3,
      }}
      elevation={0}
    >
      <CardHeader
        sx={{ '& .MuiCardHeader-action': { mr: 0 } }}
        title={
          <>
            <Typography variant="subtitle2" align="right" color="#9E9E9E">
              {updateDateText}
            </Typography>
            <Typography variant="subtitle2" align="right" color="#9E9E9E">
              {createDateText}
            </Typography>
          </>
        }
      />

      <Tabs
        value={value}
        indicatorColor="primary"
        onChange={onTabChange}
        sx={{
          mb: 3,
          minHeight: 'auto',
          '& button': {
            minWidth: 100,
          },
          '& a': {
            minHeight: 'auto',
            minWidth: 10,
            py: 1.5,
            px: 1,
            mr: 2.25,
            color: '#9e9e9e',
          },
          '& a.Mui-selected': {
            color: 'primary.main',
          },
        }}
        variant="scrollable"
      >
        {tabs.map((tab: any, i: number) => {
          return (
            <Tab
              key={i}
              component={Link}
              to={tab.to}
              label={tab.label}
              {...a11yProps(0)}
            />
          );
        })}
      </Tabs>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
