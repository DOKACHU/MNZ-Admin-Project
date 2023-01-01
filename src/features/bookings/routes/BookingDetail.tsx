/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { ContentLayout } from '../../../layouts';
import { CustomDetailForm } from '../../../components';
import { bookingTab } from '../types';
import { BookingInfo, MedicalCharts } from '../components';
import { useDetailTab } from '../../../hooks';

export default function BookingDetail() {
  const { value, handleTabChange, TabPanel } = useDetailTab();

  return (
    <ContentLayout title="예약 상세">
      <CustomDetailForm
        value={value}
        tabs={bookingTab}
        onTabChange={handleTabChange}
      >
        {bookingTab.map((tab: any, i: number) => {
          console.log({ tab });
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.id === 0 && <BookingInfo />}
              {tab.id === 1 && <MedicalCharts />}
            </TabPanel>
          );
        })}
      </CustomDetailForm>
    </ContentLayout>
  );
}
