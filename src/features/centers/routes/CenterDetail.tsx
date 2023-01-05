import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentLayout } from '../../../layouts';
import { CustomDetailForm } from '../../../components';
import { centerTab } from '../../../constansts';
import { useDetailTab } from '../../../hooks';
import { BasicInfo } from '../components';
import { useCenter } from '../api';

export default function CenterDetail() {
  const { id } = useParams();
  const centerId = id || '';
  const { value, handleTabChange, TabPanel } = useDetailTab();
  const { isLoading, data } = useCenter({ centerId });

  return (
    <ContentLayout title="센터 상세" isBackButton>
      <CustomDetailForm
        value={value}
        tabs={centerTab}
        onTabChange={handleTabChange}
        loading={isLoading}
      >
        {centerTab.map((tab: any, i: number) => {
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
