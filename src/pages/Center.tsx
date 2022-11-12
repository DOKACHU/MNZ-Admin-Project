import React from 'react';

import { ListTemplate } from '../template';
import { MainTable } from '../components';
import { centerColumns } from '../constansts';

export default function Center() {
  return (
    <ListTemplate title="센터 관리" isButton>
      <MainTable columns={centerColumns} rows={[]} />
    </ListTemplate>
  );
}
