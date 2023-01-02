import React from 'react';
import { ContentLayout } from '../../../layouts';
import { CustomDetailForm } from '../../../components';
import { reviewTab } from '../../../constansts';
import { useDetailTab } from '../../../hooks';
import { BasicInfo } from '../components';

export default function ReviewDetail() {
  const { value, handleTabChange, TabPanel } = useDetailTab();

  return (
    <ContentLayout title="리뷰 상세">
      <CustomDetailForm
        value={value}
        tabs={reviewTab}
        onTabChange={handleTabChange}
      >
        {reviewTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.id === 0 && <BasicInfo />}
              {/* {tab.id === 1 && <MedicalCharts />} */}
            </TabPanel>
          );
        })}
      </CustomDetailForm>
    </ContentLayout>
  );
}
