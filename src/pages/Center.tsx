/* eslint-disable react/no-array-index-key */
import React from 'react';
import { TableRow, TableCell, Checkbox } from '@mui/material';
import { ListTemplate } from '../template';
import { MainTable } from '../components';
import {
  centerColumns,
  stableSort,
  getComparator,
  CENTER_LIST_API,
} from '../constansts';
import { useGetLists, useTableList } from '../hooks';

export default function Center() {
  const { fetchList, isLoading } = useGetLists({ BaseURL: CENTER_LIST_API });
  const { page, order, orderBy, rowsPerPage, handleRowClick } = useTableList(
    fetchList?.centerList || []
  );

  return (
    <ListTemplate title="센터 관리" isButton loading={isLoading}>
      <MainTable columns={centerColumns} rows={fetchList?.centerList}>
        {stableSort(fetchList?.centerList || [], getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row: any, index: number) => {
            // const isItemSelected = isSelected(row.productId);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <TableRow
                key={index}
                hover
                onClick={(e: any) => {
                  handleRowClick(e, row.center_id);
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
                <TableCell>{row?.center_id}</TableCell>
                <TableCell>{row?.name}</TableCell>
                <TableCell>{row?.address}</TableCell>
                <TableCell>{row?.description}</TableCell>
              </TableRow>
            );
          })}
      </MainTable>
    </ListTemplate>
  );
}
