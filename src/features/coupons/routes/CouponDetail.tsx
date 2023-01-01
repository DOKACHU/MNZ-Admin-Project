import React from 'react';
import { ContentLayout } from '../../../layouts';
import { CustomDetailForm } from '../../../components';
import { couponTab } from '../../../constansts';
import { useDetailTab } from '../../../hooks';

export default function CouponDetail() {
  const { value, handleTabChange, TabPanel } = useDetailTab();

  return (
    <ContentLayout title="쿠폰 상세">
      <CustomDetailForm
        value={value}
        tabs={couponTab}
        onTabChange={handleTabChange}
      >
        {couponTab.map((tab: any, i: number) => {
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
