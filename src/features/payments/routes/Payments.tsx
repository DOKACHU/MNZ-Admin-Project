import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';

export default function Payments() {
  return (
    <ContentLayout title="결제 관리">
      <Table
        loading={false}
        // data={data}
        data={[]}
        columns={[]}
      />
    </ContentLayout>
  );
}
