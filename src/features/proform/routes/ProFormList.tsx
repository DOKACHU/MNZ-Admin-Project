/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { useEntryPros } from '../api';
import { EntryProType } from '../types';
import { useModal, usePagination } from '../../../hooks';
import { CreatePros } from '../components';

export default function ProFormList() {
  const pagination = usePagination();
  const { isLoading, data } = useEntryPros({ ...pagination });
  const modal = useModal();

  return (
    <ContentLayout title="프로 입점 폼 리스트" {...modal}>
      <CreatePros {...modal} />
      <Table<EntryProType>
        loading={isLoading}
        {...pagination}
        total={data?.total_count}
        data={data?.bookingList}
        columns={[
          {
            id: 'proEntryId',
            field: 'proEntryId',
            title: '프로 번호',
          },
          {
            id: 'proName',
            field: 'proName',
            title: '프로 이름',
          },
          {
            id: 'gender',
            field: 'gender',
            title: '상뱔',
          },
          {
            id: 'city',
            field: 'city',
            title: '지역',
          },
          {
            id: 'therapyCategory',
            field: 'therapyCategory',
            title: '전공',
          },
          {
            id: 'description',
            field: 'description',
            title: '프로 설명',
          },
        ]}
      />
    </ContentLayout>
  );
}
