/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { TableRow, TableCell, Checkbox, Grid, TextField } from '@mui/material';
import { ListTemplate } from '../template';
import { MainTable, MainModal } from '../components';
import {
  bookColumns,
  stableSort,
  getComparator,
  CENTER_BASE_API,
} from '../constansts';
import { useGetLists, useTableList, useModal } from '../hooks';

export default function Book() {
  const { fetchList, isLoading } = useGetLists({ BaseURL: CENTER_BASE_API });
  const { page, order, orderBy, rowsPerPage, handleRowClick } = useTableList(
    fetchList?.centerList || []
  );
  const { open, handleOpen } = useModal();

  // TODO: mockup 필요

  return (
    <>
      <ListTemplate
        title="예약 관리"
        isButton
        loading={isLoading}
        onOpenModal={handleOpen}
      >
        <MainTable columns={bookColumns} rows={[]}>
          {stableSort([], getComparator(order, orderBy))
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
      <MainModal open={open} handleClose={handleOpen} title="예약 생성 모달">
        <Grid item sm={4}>
          <TextField
            inputProps={{
              maxLength: 2,
            }}
            helperText="치료횟수"
            size="small"
            id="outlined-basic1"
            fullWidth
            // label="Name"
            // value={d}
            //   disabled
            // defaultValue={user?.name}
          />
        </Grid>
      </MainModal>
    </>
  );
}
