import React from 'react';
import { ContentLayout } from '../../../layouts';
import { CustomDetailForm } from '../../../components';
import { productTab } from '../../../constansts';
import { useDetailTab } from '../../../hooks';

export default function ProductDetail() {
  const { value, handleTabChange, TabPanel } = useDetailTab();

  return (
    <ContentLayout title="상품 상세">
      <CustomDetailForm
        value={value}
        tabs={productTab}
        onTabChange={handleTabChange}
      >
        {productTab.map((tab: any, i: number) => {
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
