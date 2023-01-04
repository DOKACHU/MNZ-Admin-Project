/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import { useParams } from 'react-router-dom';
import { ContentLayout } from '../../../layouts';
import { CustomDetailForm } from '../../../components';
import { bookingTab } from '../types';
import { BasicInfo, MedicalCharts } from '../components';
import { useDetailTab, useModal } from '../../../hooks';
import { useBooking } from '../api';

export default function BookingDetail() {
  const { id } = useParams();
  const bookingId = id || '';
  const { value, handleTabChange, TabPanel } = useDetailTab();
  const { isLoading, data } = useBooking({ bookingId });
  const modal = useModal();
  // const deleteCoupon = useDeleteCoupon();
  return (
    <ContentLayout title="예약" {...modal}>
      <CustomDetailForm
        value={value}
        tabs={bookingTab}
        onTabChange={handleTabChange}
        loading={isLoading}
      >
        {bookingTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.id === 0 && <BasicInfo detail={data} />}
              {tab.id === 1 && <MedicalCharts />}
            </TabPanel>
          );
        })}
      </CustomDetailForm>
    </ContentLayout>
  );
}
