import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentLayout } from '../../../layouts';
import { CustomDetailForm } from '../../../components';
import { reviewTab } from '../../../constansts';
import { useDetailTab } from '../../../hooks';
import { BasicInfo } from '../components';
import { useReview } from '../api';

export default function ReviewDetail() {
  const { id } = useParams();
  const reviewId = id || '';
  const { value, handleTabChange, TabPanel } = useDetailTab();
  const { isLoading, data } = useReview({ reviewId });
  return (
    <ContentLayout title="리뷰 상세">
      <CustomDetailForm
        value={value}
        tabs={reviewTab}
        onTabChange={handleTabChange}
        loading={isLoading}
      >
        {reviewTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.id === 0 && <BasicInfo detail={data} />}
              {/* {tab.id === 1 && <MedicalCharts />} */}
            </TabPanel>
          );
        })}
      </CustomDetailForm>
    </ContentLayout>
  );
}
