/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { useProducts } from '../api';
import { ProductType } from '../types';
import { CreateProducts } from '../components';
import { useModal } from '../../../hooks';
import { numberWithCommas } from '../../../constansts';

export default function Products() {
  const { isLoading, data } = useProducts();
  const modal = useModal();

  return (
    <ContentLayout title="상품" isButton {...modal}>
      <CreateProducts {...modal} />
      <Table<ProductType>
        loading={isLoading}
        // data={data}
        data={data}
        columns={[
          {
            id: 'productId',
            field: 'productId',
            title: '상품 번호',
          },
          {
            id: 'name',
            field: 'name',
            title: '상품 이름',
          },
          {
            id: 'description',
            field: 'description',
            title: '상품 설명',
          },
          {
            id: 'price',
            field: 'price',
            title: '상품 가격',
            Cell({ entry: { price } }) {
              return <span>{`${numberWithCommas(price || 0)} 원`}</span>;
            },
          },
          {
            id: 'runningTime',
            field: 'runningTime',
            title: '진행 시간',
            Cell({ entry: { runningTime } }) {
              return <span>{`${runningTime}분`}</span>;
            },
          },
          {
            id: 'discountRate',
            field: 'discountRate',
            title: '할인율',
            Cell({ entry: { discountRate } }) {
              return <span>{`${discountRate}%`}</span>;
            },
          },
          {
            id: 'progressNumber',
            field: 'progressNumber',
            title: '치료 횟수',
            Cell({ entry: { progressNumber } }) {
              return <span>{`${progressNumber}회`}</span>;
            },
          },
        ]}
      />
    </ContentLayout>
  );
}
