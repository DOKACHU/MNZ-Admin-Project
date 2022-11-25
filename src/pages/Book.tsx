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
  CENTER_BASE_API,
  mockBookList,
} from '../constansts';
import { useGetLists, useTableList, useModal } from '../hooks';

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
    BaseURL: CENTER_BASE_API,
  });

  const { open, handleOpen } = useModal();

  const rows = mockBookList || [];
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
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row: any, index: number) => {
            // const isItemSelected = isSelected(row.productId);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <TableRow
                key={index}
                hover
                onClick={(e: any) => {
                  handleRowClick(e, row.bookId);
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
                <TableCell>{row?.bookId}</TableCell>
                <TableCell>{row?.name}</TableCell>
                <TableCell>{row?.pro}</TableCell>
                <TableCell>{row?.location}</TableCell>
                <TableCell>{row?.target}</TableCell>
                <TableCell>{row?.date}</TableCell>
                <TableCell>{row?.time}</TableCell>
                <TableCell>{row?.count}</TableCell>
              </TableRow>
            );
          })}
      </MainTable>
    </ListTemplate>
  );
}
