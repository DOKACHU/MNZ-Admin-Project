/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { EntryCenterType, ServerCenterType } from '../types';
import { useEntryCenters } from '../api';
import { useModal, usePagination } from '../../../hooks';
import { CreateCenters } from '../components';

export default function Centers() {
  const pagination = usePagination();
  const { isLoading, data } = useEntryCenters({ ...pagination });
  const modal = useModal();

  return (
    <ContentLayout title="센터 입점 폼 리스트" {...modal}>
      <CreateCenters {...modal} />
      <Table<EntryCenterType>
        loading={isLoading}
        {...pagination}
        total={data?.total_count}
        data={data?.bookingList}
        columns={[
          {
            id: 'centerEntryId',
            field: 'centerEntryId',
            title: '센터 번호',
          },
          {
            id: 'centerName',
            field: 'centerName',
            title: '센터 이름',
          },
          {
            id: 'address1',
            field: 'address1',
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
