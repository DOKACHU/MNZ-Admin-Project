import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { CenterType } from '../types';
import { useCenters } from '../api';
import { useModal } from '../../../hooks';
import { CreateCenters } from '../components';

export default function Centers() {
  const { isLoading, data } = useCenters();
  const { open, handleClose, handleOpen } = useModal();

  return (
    <ContentLayout title="센터" isButton onOpen={handleOpen}>
      <CreateCenters open={open} onClose={handleClose} />

      <Table<CenterType>
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
