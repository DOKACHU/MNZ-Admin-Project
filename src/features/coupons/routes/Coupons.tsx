import React from 'react';

import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';

export default function Coupons() {
  return (
    <ContentLayout title="쿠폰" isButton>
      <Table />
    </ContentLayout>
  );
}
