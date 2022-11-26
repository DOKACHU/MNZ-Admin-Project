/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { TableRow, TableCell, Checkbox, Grid, TextField } from '@mui/material';
import { ListTemplate } from '../template';
import { MainTable } from '../components';
import {
  proInit,
  notificationColumns,
  stableSort,
  getComparator,
  PRO_BASE_API,
} from '../constansts';
import { useGetLists } from '../hooks';

export default function Notification() {
  const {
    fetchList,
    isLoading,
    createInfo,
    setCreateInfo,
    handleCreateChange,
    handleSubmit,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    order,
    orderBy,
    handleRowClick,
  } = useGetLists({
    BaseURL: '',
    Init: '',
  });

  const rows = fetchList?.couponList || [];
  const total = fetchList?.total_count || 0;

  return (
    <ListTemplate
      isButton
      title="푸시 알림"
      loading={isLoading}
      onSubmit={handleSubmit}
      createModalForm={
        <Grid item sm={12}>
          {/* <TextField
            helperText="핸드폰 번호"
            size="small"
            id="outlined-basic1"
            fullWidth
            name="phoneNumber"
            onChange={handleCreateChange}
            value={createInfo?.phoneNumber}
          /> */}
        </Grid>
      }
    >
      <MainTable
        columns={notificationColumns}
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
                  handleRowClick(e, row.proId);
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
                {/* <TableCell>{row?.proId}</TableCell>
                <TableCell>{row?.name}</TableCell>
                <TableCell>{row?.phoneNumber}</TableCell>
                <TableCell>{row?.description}</TableCell> */}
              </TableRow>
            );
          })}
      </MainTable>
    </ListTemplate>
  );
}
