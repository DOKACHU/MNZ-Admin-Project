/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { TableRow, TableCell, Checkbox, Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ListTemplate } from '../template';
import { MainTable, MainModal } from '../components';
import {
  bookColumns,
  stableSort,
  getComparator,
  BOOK_BASE_API,
  mockBookList,
} from '../constansts';
import { useGetLists } from '../hooks';

export default function Book() {
  const {
    fetchList,
    isLoading,
    // createInfo,
    // setCreateInfo,
    // handleCreateChange,
    handleSubmit,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    order,
    orderBy,
    handleRowClick,
  } = useGetLists({
    BaseURL: BOOK_BASE_API,
  });

  const rows = fetchList?.bookingList || [];
  const total = fetchList?.total_count || 0;

  return (
    <ListTemplate
      title="예약 관리"
      // isButton
      loading={isLoading}
      onSubmit={handleSubmit}
    >
      <MainTable
        columns={bookColumns}
        rows={rows}
        page={page}
        total={total}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      >
        {stableSort(rows, getComparator(order, orderBy))
          // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row: any, index: number) => {
            // const isItemSelected = isSelected(row.productId);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <TableRow
                key={index}
                hover
                onClick={(e: any) => {
                  handleRowClick(e, row.bookingId);
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
                <TableCell>{row?.bookingId}</TableCell>
                <TableCell>{row?.userName}</TableCell>
                <TableCell>{row?.centerName}</TableCell>
                <TableCell>{row?.proName}</TableCell>
                <TableCell>{row?.status}</TableCell>
                <TableCell>{row?.isCancel ? 'O' : 'X'}</TableCell>
                <TableCell>{row?.bookingDate}</TableCell>
              </TableRow>
            );
          })}
      </MainTable>
    </ListTemplate>
  );
}
