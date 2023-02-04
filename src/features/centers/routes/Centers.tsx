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
  const { isLoading, data } = useCenters({ ...pagination });
  const modal = useModal();

  return (
    <ContentLayout title="센터" isButton {...modal}>
      <CreateCenters {...modal} />
      <Table<CenterType>
        loading={isLoading}
        {...pagination}
        total={0}
        data={data?.centerList}
        columns={[
          {
            id: 'centerId',
            field: 'centerId',
            title: '센터 번호',
          },
          {
            id: 'name',
            field: 'name',
            title: '센터 이름',
          },
          {
            id: 'address',
            field: 'address',
            title: '센터 주소',
          },
          {
            id: 'description',
            field: 'description',
            title: '센터 설명',
          },
        ]}
      />
    </ContentLayout>
  );
}
