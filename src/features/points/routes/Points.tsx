import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { usePoints } from '../api';
import { ServerPointType, PointType } from '../types';

export default function Points() {
  const { isLoading, data } = usePoints();

  return (
    <ContentLayout title="포인트">
      <Table<PointType>
        loading={isLoading}
        // data={data}
        data={data?.pointList}
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