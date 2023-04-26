/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { CenterType, ServerCenterType } from '../types';
// import { useCenters } from '../api';
import { useModal, usePagination } from '../../../hooks';
import { CreateCenters } from '../components';

export default function Centers() {
  const pagination = usePagination();
  // const { isLoading, data } = useCenters({ ...pagination });
  const modal = useModal();

  return (
    <ContentLayout title="센터 입점 폼 리스트" {...modal}>
      <CreateCenters {...modal} />
      <Table<CenterType>
        loading={false}
        {...pagination}
        total={0}
        data={[]}
        columns={[]}
      />
    </ContentLayout>
  );
}
