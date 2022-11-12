import React from 'react';

import { ListTemplate } from '../template';
import { MainTable } from '../components';
import { couponColumns } from '../constansts';

export default function Center() {
  return (
    <ListTemplate title="쿠폰 관리" isButton>
      <MainTable columns={couponColumns} rows={[]} />
    </ListTemplate>
  );
}
