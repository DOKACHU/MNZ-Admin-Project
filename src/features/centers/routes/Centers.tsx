/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { CenterType, ServerCenterType } from '../types';
import { useCenters } from '../api';
import { useModal, usePagination } from '../../../hooks';
import { CreateCenters } from '../components';

export default function Centers() {
  const pagination = usePagination();
  const { isLoading, data } = useCenters<ServerCenterType>({ ...pagination });
  const modal = useModal();
  console.log({ pagination, data });

  return (
    <ContentLayout title="센터" isButton {...modal}>
      <CreateCenters {...modal} />
      <Table<CenterType>
        loading={isLoading}
        // data={data}
        {...pagination}
        total={data?.total_count}
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
