import React from 'react';
import { ContentLayout } from '../../../layouts';
import { CustomDetailForm } from '../../../components';
import { centerTab } from '../../../constansts';
import { useDetailTab } from '../../../hooks';

export default function CenterDetail() {
  const { value, handleTabChange, TabPanel } = useDetailTab();

  return (
    <ContentLayout title="센터 상세">
      <CustomDetailForm
        value={value}
        tabs={centerTab}
        onTabChange={handleTabChange}
      >
        {centerTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {/* {tab.id === 0 && <BookingInfo />}
              {tab.id === 1 && <MedicalCharts />} */}
            </TabPanel>
          );
        })}
      </CustomDetailForm>
    </ContentLayout>
  );
}
