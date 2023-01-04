/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { usePros } from '../api';
import { ProType } from '../types';
import { useModal } from '../../../hooks';
import { CreatePros } from '../components';

export default function Pros() {
  const { isLoading, data } = usePros();
  const modal = useModal();

  return (
    <ContentLayout title="프로" isButton {...modal}>
      <CreatePros {...modal} />
      <Table<ProType>
        loading={isLoading}
        data={data}
        columns={[
          {
            id: 'proId',
            field: 'proId',
            title: '프로 번호',
          },
          {
            id: 'name',
            field: 'name',
            title: '이름',
          },
          {
            id: 'phoneNumber',
            field: 'phoneNumber',
            title: '핸드폰 번호',
          },
          {
            id: 'centerId',
            field: 'centerId',
            title: '소속 센터',
          },
        ]}
      />
    </ContentLayout>
  );
}
