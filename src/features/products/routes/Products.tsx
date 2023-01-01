import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { useProducts } from '../api';
import { ProductType } from '../types';
import { CreateProducts } from '../components';
import { useModal } from '../../../hooks';

export default function Products() {
  const { isLoading, data } = useProducts();
  const { open, handleClose, handleOpen } = useModal();

  return (
    <ContentLayout title="상품" isButton onOpen={handleOpen}>
      <CreateProducts open={open} onClose={handleClose} />
      <Table<ProductType>
        loading={isLoading}
        // data={data}
        data={data?.productList}
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
          },
          {
            id: 'runningTime',
            field: 'runningTime',
            title: '진행 시간',
          },
          {
            id: 'discountRate',
            field: 'discountRate',
            title: '할인율',
          },
          {
            id: 'progressNumber',
            field: 'progressNumber',
            title: '치료 횟수',
          },
        ]}
      />
    </ContentLayout>
  );
}
