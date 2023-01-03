import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentLayout } from '../../../layouts';
import { CustomDetailForm } from '../../../components';
import { couponTab } from '../../../constansts';
import { useDetailTab, useModal } from '../../../hooks';
import { BasicInfo, UpdateCoupon } from '../components';
import { useCoupon } from '../api';

export default function CouponDetail() {
  const { id } = useParams();
  const couponId = id || '';
  const { value, handleTabChange, TabPanel } = useDetailTab();
  const { isLoading, data } = useCoupon({ couponId });
  const { open, handleClose, handleOpen } = useModal();

  return (
    <ContentLayout title="쿠폰" isBackButton isUpdateButton onOpen={handleOpen}>
      <CustomDetailForm
        value={value}
        tabs={couponTab}
        onTabChange={handleTabChange}
        loading={isLoading}
      >
        <UpdateCoupon
          couponId={couponId}
          open={open}
          onClose={handleClose}
          detail={data}
        />
        {couponTab.map((tab: any, i: number) => {
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
