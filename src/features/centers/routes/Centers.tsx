import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { ServerPointType, PointType } from '../types';
import { useCenters } from '../api';

export default function Centers() {
  const { isLoading, data } = useCenters();

  return (
    <ContentLayout title="센터">
      {' '}
      <Table<PointType>
        loading={isLoading}
        // data={data}
        data={data?.centerList}
        columns={[
          {
            id: 'centerId',
            field: 'centerId',
            title: '병원 번호',
          },
          {
            id: 'name',
            field: 'name',
            title: '병원 이름',
          },
          {
            id: 'address',
            field: 'address',
            title: '병원 주소',
          },
          {
            id: 'description',
            field: 'description',
            title: '병원 설명',
          },
        ]}
      />
    </ContentLayout>
  );
}
