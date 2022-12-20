import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { useBookings } from '../api';
import { BookingType } from '../types';
import { formatDate } from '../../../utils/format';
import { CreateBookings } from '../components';
import { useModal } from '../../../hooks';

export default function Bookings() {
  const { isLoading, data } = useBookings();
  const { open, handleClose, handleOpen } = useModal();

  return (
    <ContentLayout title="예약" isButton onOpen={handleOpen}>
      <CreateBookings open={open} onClose={handleClose} />
      <Table<BookingType>
        loading={isLoading}
        data={data as any}
        columns={[
          {
            id: 'bookingId',
            field: 'bookingId',
            title: '예약 번호',
          },
          {
            id: 'centerName',
            field: 'centerName',
            title: '병원 이름',
          },
          {
            id: 'proName',
            field: 'proName',
            title: '프로 이름',
          },
          {
            id: 'userName',
            field: 'userName',
            title: '고객 이름',
          },
          {
            id: 'status',
            field: 'status',
            title: '예약 상태',
          },
          {
            id: 'isCancel',
            field: 'isCancel',
            title: ' 취소 여부 ',
            Cell({ entry: { isCancel } }) {
              return isCancel ? 'O' : 'X';
            },
          },
        ]}
      />
    </ContentLayout>
  );
}
