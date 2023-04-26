/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Tabs,
  Tab,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
// import { useCoupons } from '../api';
import { EntryType } from '../types';
// import { formatDate } from '../../../utils/format';
// import { CreateCoupon } from '../components';
import { useModal, usePagination, useDetailTab } from '../../../hooks';
// import { numberWithCommas } from '../../../constansts';
import { entryTab } from '../../../constansts';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function EntryList() {
  const pagination = usePagination();
  // const { isLoading, data } = useCoupons({ ...pagination });
  const modal = useModal();
  const { value, handleTabChange, TabPanel } = useDetailTab();

  return (
    <ContentLayout title="입점 폼">
      {/* <CreateCoupon {...modal} /> */}
      <Tabs
        value={value}
        indicatorColor="primary"
        onChange={handleTabChange}
        sx={{
          p: 2,
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
        {entryTab.map((tab: any, i: number) => {
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
      {entryTab.map((tab: any, i: number) => {
        return (
          <TabPanel key={i} value={value} index={tab.id}>
            {tab.id === 0 && (
              <Table<EntryType>
                loading={false}
                {...pagination}
                total={0}
                data={[]}
                columns={[]}
              />
            )}
            {tab.id === 1 && (
              <Table<EntryType>
                loading={false}
                {...pagination}
                total={0}
                data={[]}
                columns={[]}
              />
            )}
          </TabPanel>
        );
      })}
    </ContentLayout>
  );
}
