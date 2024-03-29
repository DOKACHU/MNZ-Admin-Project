/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentLayout } from '../../../layouts';
import { CustomDetailForm, MainDeleteModal } from '../../../components';
import { couponTab } from '../../../constansts';
import { useDetailTab, useModal } from '../../../hooks';
import { BasicInfo, UpdateCoupon } from '../components';
import { useCoupon, useDeleteCoupon } from '../api';

export default function CouponDetail() {
  const { id } = useParams();
  const couponId = id || '';
  const { value, handleTabChange, TabPanel } = useDetailTab();
  const { isLoading, data } = useCoupon({ couponId });
  const modal = useModal();
  const deleteCoupon = useDeleteCoupon();

  return (
    <ContentLayout
      title="쿠폰"
      isBackButton
      isUpdateButton
      isDeleteButton
      {...modal}
    >
      <CustomDetailForm
        value={value}
        tabs={couponTab}
        onTabChange={handleTabChange}
        loading={isLoading}
      >
        <UpdateCoupon couponId={couponId} {...modal} detail={data} />
        <MainDeleteModal
          {...modal}
          {...deleteCoupon}
          deleteTitle="쿠폰 삭제"
          couponId={couponId}
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
