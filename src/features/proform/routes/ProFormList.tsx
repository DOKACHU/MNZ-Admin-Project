/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
// import { usePros } from '../api';
import { ProType } from '../types';
import { useModal, usePagination } from '../../../hooks';
import { CreatePros } from '../components';

export default function ProFormList() {
  const pagination = usePagination();
  // const { isLoading, data } = usePros({ ...pagination });
  const modal = useModal();

  return (
    <ContentLayout title="프로 입점 폼 리스트" {...modal}>
      <CreatePros {...modal} />
      <Table<ProType>
        loading={false}
        {...pagination}
        total={0}
        data={[]}
        columns={[]}
      />
    </ContentLayout>
  );
}
