import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';

export default function Notices() {
  return (
    <ContentLayout title="공지사항">
      <Table
        loading={false}
        // data={data}
        data={[]}
        columns={[]}
      />
    </ContentLayout>
  );
}
