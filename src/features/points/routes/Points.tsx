/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { usePoints } from '../api';
import { PointType } from '../types';
import { useModal } from '../../../hooks';
import { CreatePoints } from '../components';

export default function Points() {
  const { isLoading, data } = usePoints();
  const modal = useModal();

  return (
    <ContentLayout title="포인트" isButton {...modal}>
      <CreatePoints {...modal} />
      <Table<PointType>
        loading={isLoading}
        // data={data}
        data={data}
        columns={[
          {
            id: 'pointEventId',
            field: 'pointEventId',
            title: '포인트 번호',
          },
          {
            id: 'status',
            field: 'status',
            title: '상태',
          },
          {
            id: 'price',
            field: 'price',
            title: '가격',
          },
          {
            id: 'reason',
            field: 'reason',
            title: '이유',
          },
        ]}
      />
    </ContentLayout>
  );
}
