import React from 'react';
import { TableRow, TableCell, Checkbox } from '@mui/material';

import { ListTemplate } from '../template';
import { MainTable } from '../components';
import {
  couponColumns,
  stableSort,
  getComparator,
  COUPON_BASE_API,
} from '../constansts';
import { useGetLists, useTableList } from '../hooks';

export default function Coupon() {
  const { fetchList, isLoading } = useGetLists({
    BaseURL: COUPON_BASE_API,
  });

  const { page, order, orderBy, rowsPerPage, handleRowClick } = useTableList(
    fetchList?.couponList || []
  );

  return (
    <ListTemplate loading={isLoading} title="쿠폰 관리" isButton>
      <MainTable columns={couponColumns} rows={fetchList?.couponList}>
        {stableSort(fetchList?.couponList || [], getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row: any, index: number) => {
            // const isItemSelected = isSelected(row.productId);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <TableRow
                key={index}
                hover
                onClick={(e: any) => {
                  handleRowClick(e, row.coupon_id);
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
                <TableCell>{row?.coupon_id}</TableCell>
                <TableCell>{row?.title}</TableCell>
                <TableCell>{row?.description}</TableCell>
                <TableCell>{row?.discountRate}</TableCell>
                <TableCell>{row?.discountPrice}</TableCell>
                <TableCell>{row?.startPeriod}</TableCell>
                <TableCell>{row?.closePeriod}</TableCell>
                <TableCell>{row?.isDeleted ? 'O' : 'X'}</TableCell>
              </TableRow>
            );
          })}
      </MainTable>
    </ListTemplate>
  );
}
