/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { TableRow, TableCell, Checkbox } from '@mui/material';
import { ListTemplate } from '../template';
import { MainTable } from '../components';
import {
  proColumns,
  stableSort,
  getComparator,
  PRO_LIST_API,
} from '../constansts';
import { useGetLists, useTableList } from '../hooks';

export default function Center() {
  const { fetchList, isLoading } = useGetLists({ BaseURL: PRO_LIST_API });
  const { page, order, orderBy, rowsPerPage, handleRowClick } = useTableList(
    fetchList?.proList || []
  );

  return (
    <ListTemplate loading={isLoading} title="프로 관리" isButton>
      <MainTable columns={proColumns} rows={fetchList?.proList}>
        {stableSort(fetchList?.proList || [], getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row: any, index: number) => {
            // const isItemSelected = isSelected(row.productId);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <TableRow
                key={index}
                hover
                onClick={(e: any) => {
                  handleRowClick(e, row.pro_id);
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
                <TableCell>{row?.pro_id}</TableCell>
                <TableCell>{row?.name}</TableCell>
                <TableCell>{row?.phoneNumber}</TableCell>
                <TableCell>{row?.description}</TableCell>
              </TableRow>
            );
          })}
      </MainTable>
    </ListTemplate>
  );
}
