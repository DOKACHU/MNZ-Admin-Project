import React from 'react';

import { ListTemplate } from '../template';
import { MainTable } from '../components';
import { productColumns } from '../constansts';

export default function Product() {
  return (
    <ListTemplate title="상품 관리" isButton>
      <MainTable columns={productColumns} rows={[]} />
    </ListTemplate>
  );
}
