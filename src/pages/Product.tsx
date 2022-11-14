import React from 'react';
import { TableRow, TableCell, Checkbox } from '@mui/material';

import { ListTemplate } from '../template';
import { MainTable } from '../components';
import {
  productColumns,
  stableSort,
  getComparator,
  PRODUCT_BASE_API,
} from '../constansts';
import { useGetLists, useTableList } from '../hooks';

export default function Product() {
  const { fetchList, isLoading } = useGetLists({ BaseURL: PRODUCT_BASE_API });
  const { page, order, orderBy, rowsPerPage, handleRowClick } = useTableList(
    fetchList?.productList || []
  );
  return (
    <ListTemplate title="상품 관리" isButton loading={isLoading}>
      <MainTable columns={productColumns} rows={fetchList?.productList}>
        {stableSort(fetchList?.productList || [], getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row: any, index: number) => {
            // const isItemSelected = isSelected(row.productId);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <TableRow
                key={index}
                hover
                onClick={(e: any) => {
                  handleRowClick(e, row.productId);
                }}
                role="checkbox"
                // aria-checked={isItemSelected}
                tabIndex={-1}
                // key={row.productId}
                // selected={isItemSelected}
              >
                <TableCell
                  padding="checkbox"
                  // onClick={(e) => {
                  //   handleClick(e, row.productId);
                  // }}
                >
                  <Checkbox
                    color="primary"
                    // checked={isItemSelected}
                    inputProps={{
                      'aria-labelledby': labelId,
                    }}
                  />
                </TableCell>
                <TableCell>{row?.productId}</TableCell>
                <TableCell>{row?.name}</TableCell>
                <TableCell>{row?.description}</TableCell>
                <TableCell>{row?.price}</TableCell>
                <TableCell>{row?.discountRate}</TableCell>
                <TableCell>{row?.runningTime}</TableCell>
                <TableCell>{row?.progressNumber}</TableCell>
              </TableRow>
            );
          })}
      </MainTable>
    </ListTemplate>
  );
}
