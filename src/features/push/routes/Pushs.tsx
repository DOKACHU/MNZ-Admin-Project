import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';

export default function Pushs() {
  return (
    <ContentLayout title="푸시 알림">
      <Table
        loading={false}
        // data={data}
        data={[]}
        columns={[]}
      />
    </ContentLayout>
  );
}
