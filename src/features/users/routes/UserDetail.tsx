import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentLayout } from '../../../layouts';
import { CustomDetailForm } from '../../../components';
import { userTab } from '../../../constansts';
import { useDetailTab } from '../../../hooks';
import { BasicInfo } from '../components';
import { useUser } from '../api';

export default function UserDetail() {
  const { id } = useParams();
  const userId = id || '';
  const { value, handleTabChange, TabPanel } = useDetailTab();
  const { isLoading, data } = useUser({ userId });

  return (
    <ContentLayout title="유저" isBackButton>
      <CustomDetailForm
        value={value}
        tabs={userTab}
        onTabChange={handleTabChange}
        loading={isLoading}
      >
        {userTab.map((tab: any, i: number) => {
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
