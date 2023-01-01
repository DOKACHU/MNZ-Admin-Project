import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';

export default function Users() {
  return (
    <ContentLayout title="고객">
      <Table
        loading={false}
        // data={data}
        data={[]}
        columns={[]}
      />
    </ContentLayout>
  );
}
