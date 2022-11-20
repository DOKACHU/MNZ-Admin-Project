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
  const { fetchList, isLoading } = useGetLists({ BaseURL: CENTER_BASE_API });
  const { page, order, orderBy, rowsPerPage, handleRowClick } = useTableList(
    fetchList?.centerList || []
  );
  const { open, handleOpen } = useModal();

  return (
    <>
      <ListTemplate
        title="예약 관리"
        isButton
        loading={isLoading}
        onOpenModal={handleOpen}
      >
        <MainTable columns={bookColumns} rows={mockBookList}>
          {stableSort(mockBookList, getComparator(order, orderBy))
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
      <MainModal open={open} handleClose={handleOpen} title="예약 생성 모달">
        <Grid item sm={6}>
          <TextField
            inputProps={{
              maxLength: 10,
            }}
            name="name"
            helperText="유저 이름"
            size="small"
            id="outlined-basic1"
            fullWidth
            // label="Name"
            // value={d}
            //   disabled
            // defaultValue={user?.name}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            inputProps={{
              maxLength: 10,
            }}
            name="pro"
            helperText="프로 이름"
            size="small"
            id="outlined-basic1"
            fullWidth
            // label="Name"
            // value={d}
            //   disabled
            // defaultValue={user?.name}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            inputProps={{
              maxLength: 10,
            }}
            name="location"
            helperText="지역"
            size="small"
            id="outlined-basic1"
            fullWidth
            // label="Name"
            // value={d}
            //   disabled
            // defaultValue={user?.name}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            inputProps={{
              maxLength: 10,
            }}
            name="target"
            helperText="치료 부위"
            size="small"
            id="outlined-basic1"
            fullWidth
            // label="Name"
            // value={d}
            //   disabled
            // defaultValue={user?.name}
          />
        </Grid>
        <Grid item sm={6} />
        <Grid item sm={6} />

        <Grid item sm={6}>
          <TextField
            inputProps={{
              maxLength: 10,
            }}
            name="count"
            helperText="치료 횟수"
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
