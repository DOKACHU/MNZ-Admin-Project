import React from 'react';

import { ListTemplate } from '../template';
import { MainTable } from '../components';
import { centerColumns } from '../constansts';
import { useGetLists } from '../hooks';

export default function Center() {
  const { fetchList, isLoading } = useGetLists();

  return (
    <ListTemplate title="센터 관리" isButton loading={isLoading}>
      <MainTable columns={centerColumns} rows={fetchList?.centerList || []} />
    </ListTemplate>
  );
}
