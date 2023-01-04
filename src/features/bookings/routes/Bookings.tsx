/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Typography } from '@mui/material';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { useBookings } from '../api';
import { BookingType } from '../types';
import { CreateBookings } from '../components';
import { useModal } from '../../../hooks';

export default function Bookings() {
  const { isLoading, data } = useBookings();
  const modal = useModal();

  return (
    <ContentLayout title="예약" {...modal}>
      <CreateBookings {...modal} />
      <Table<BookingType>
        loading={isLoading}
        // data={data as any}
        data={data?.bookingList}
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
              return <Typography>{isCancel ? 'O' : 'X'}</Typography>;
            },
          },
        ]}
      />
    </ContentLayout>
  );
}
