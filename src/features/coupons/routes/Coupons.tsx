import React from 'react';

import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';

import { useCoupons } from '../api';

export default function Coupons() {
  const couponsQuery = useCoupons();
  console.log({ couponsQuery });

  return (
    <ContentLayout title="쿠폰" isButton>
      {/* TODO: data, columns */}
      <Table />
    </ContentLayout>
  );
}
