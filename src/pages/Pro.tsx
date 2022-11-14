import React from 'react';

import { ListTemplate } from '../template';
import { MainTable } from '../components';
import { proColumns } from '../constansts';

export default function Center() {
  return (
    <ListTemplate title="프로 관리" isButton>
      <MainTable columns={proColumns} rows={[]} />
    </ListTemplate>
  );
}
