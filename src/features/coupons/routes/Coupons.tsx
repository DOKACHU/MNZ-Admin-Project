/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { useCoupons } from '../api';
import { CouponsType } from '../types';
import { formatDate } from '../../../utils/format';
import { CreateCoupon } from '../components';
import { useModal, usePagination } from '../../../hooks';
import { numberWithCommas } from '../../../constansts';

export default function Coupons() {
  const pagination = usePagination();
  const { isLoading, data } = useCoupons({ ...pagination });
  const modal = useModal();

  return (
    <ContentLayout title="쿠폰" isButton {...modal}>
      <CreateCoupon {...modal} />
      <Table<CouponsType>
        loading={isLoading}
        {...pagination}
        total={data?.total_count}
        data={data?.couponList}
        columns={[
          {
            id: 'couponCode',
            field: 'couponCode',
            title: '쿠폰 코드',
          },
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
            Cell({ entry: { discountRate } }) {
              return <span>{`${discountRate || 0}%`}</span>;
            },
          },
          {
            id: 'discountPrice',
            field: 'discountPrice',
            title: '할인 가격',
            Cell({ entry: { discountPrice } }) {
              return (
                <span>{`${numberWithCommas(discountPrice || 0)} 원`}</span>
              );
            },
          },
          {
            id: 'isDeleted',
            field: 'isDeleted',
            title: '삭제 여부',
            Cell({ entry: { isDeleted } }) {
              return <span>{isDeleted ? 'O' : 'X'}</span>;
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
