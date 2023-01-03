/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
// import { CircularProgress } from '@mui/material';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { useCoupons } from '../api';
import { CouponsType, ServerCouponType } from '../types';
import { formatDate } from '../../../utils/format';
import { CreateCoupon } from '../components';
import { useModal } from '../../../hooks';

export default function Coupons() {
  const { isLoading, data } = useCoupons();
  const { open, handleClose, handleOpen } = useModal();

  return (
    <ContentLayout title="쿠폰" isButton onOpen={handleOpen}>
      {/* TODO: data, columns */}
      <CreateCoupon open={open} onClose={handleClose} />
      <Table<CouponsType>
        loading={isLoading}
        // data={data}
        data={data?.couponList}
        columns={[
          {
            id: 'title',
            field: 'title',
            title: '쿠폰 이름',
          },
          {
            id: 'description',
            field: 'description',
            title: '쿠폰 설명',
          },
          {
            id: 'discountRate',
            field: 'discountRate',
            title: '할인율',
          },
          {
            id: 'discountPrice',
            field: 'discountPrice',
            title: '할인 가격',
          },
          {
            id: 'isDeleted',
            field: 'isDeleted',
            title: '삭제 여부',
            Cell({ entry: { isDeleted } }) {
              return isDeleted ? 'O' : 'X';
            },
          },
          {
            id: 'startPeriod',
            field: 'startPeriod',
            title: '발급 기간',
            Cell({ entry: { startPeriod } }) {
              return <>{formatDate(startPeriod)}</>;
            },
          },
          {
            id: 'closePeriod',
            field: 'closePeriod',
            title: '만료 기간',
            Cell({ entry: { closePeriod } }) {
              return <>{formatDate(closePeriod)}</>;
            },
          },
          {
            id: 'createdAt',
            field: 'createdAt',
            title: '생성 일시',
            Cell({ entry: { createdAt } }) {
              return <>{formatDate(createdAt)}</>;
            },
          },
          // {
          //   id: '',
          //   field: 'id',
          //   Cell({ entry: { id } }) {
          //     return <Link to={`./${id}`}>View</Link>;
          //   },
          // },
          // {
          //   id: '',
          //   field: 'id',
          //   Cell({ entry: { id } }) {
          //     return <DeleteDiscussion id={id} />;
          //   },
          // },
        ]}
      />
    </ContentLayout>
  );
}
