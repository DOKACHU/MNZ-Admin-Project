/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentLayout } from '../../../layouts';
import { CustomDetailForm } from '../../../components';
import { centerTab } from '../../../constansts';
import { useDetailTab, useModal } from '../../../hooks';
import { BasicInfo, UpdateCenter } from '../components';
import { useCenter } from '../api';

export default function CenterDetail() {
  const { id } = useParams();
  const centerId = id || '';
  const { value, handleTabChange, TabPanel } = useDetailTab();
  const modal = useModal();

  // const { isLoading, data } = useCenter({ centerId });
  const dummy = {
    centerId: 'asdf',
    name: 'asdf',
    description: 'asdf',
    address: 'asdf',
  };
  return (
    <ContentLayout title="센터 상세" isBackButton isUpdateButton {...modal}>
      <CustomDetailForm
        value={value}
        tabs={centerTab}
        onTabChange={handleTabChange}
        // loading={isLoading}
      >
        <UpdateCenter centerId={centerId} {...modal} detail={dummy} />
        {centerTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.id === 0 && <BasicInfo detail={dummy} />}
              {/* {tab.id === 1 && <MedicalCharts />} */}
            </TabPanel>
          );
        })}
      </CustomDetailForm>
    </ContentLayout>
  );
}
