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
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MainProfile from './MainProfile';

interface MainDetailFormPros {
  tabs?: any;
}

function TabPanel({ children, value, index, ...other }) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MainDetailForm({ tabs }: MainDetailFormPros) {
  //   const { id } = useParams();

  const [value, setValue] = useState(0);

  const handleTabChange = (e: any, newValue: any) => {
    setValue(newValue);
  };
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
            <Typography variant="subtitle2" align="right">
              마지막 업데이트 : 2022-12-12
            </Typography>
            <Typography variant="subtitle2" align="right">
              가입일 : 2022-12-12
            </Typography>
          </>
        }
      />

      <Tabs
        value={value}
        indicatorColor="primary"
        onChange={handleTabChange}
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

      <CardContent>
        {tabs.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.label === 'profile' && <MainProfile />}
              {tab.label === 'etc' && <h1>[개발] 예정입니다.</h1>}
            </TabPanel>
          );
        })}
      </CardContent>
    </Card>
  );
}
