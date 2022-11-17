/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { TableRow, TableCell, Checkbox, Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import { ListTemplate } from '../template';
import { MainTable, MainModal } from '../components';
import {
  couponColumns,
  stableSort,
  getComparator,
  COUPON_BASE_API,
} from '../constansts';
import { useGetLists, useTableList, useModal } from '../hooks';

export default function Coupon() {
  const { open, handleOpen } = useModal();
  const [value, setValue] = useState(dayjs(new Date()));

  const { fetchList, isLoading } = useGetLists({
    BaseURL: COUPON_BASE_API,
  });

  const { page, order, orderBy, rowsPerPage, handleRowClick } = useTableList(
    fetchList?.couponList || []
  );

  return (
    <>
      <ListTemplate
        loading={isLoading}
        title="쿠폰 관리"
        isButton
        onOpenModal={handleOpen}
      >
        <MainTable columns={couponColumns} rows={fetchList?.couponList}>
          {stableSort(
            fetchList?.couponList || [],
            getComparator(order, orderBy)
          )
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
      <MainModal open={open} handleClose={handleOpen} title="쿠폰 생성 모달">
        <Grid item sm={12}>
          <TextField
            helperText="쿠폰 이름"
            size="small"
            id="outlined-basic1"
            fullWidth

            // label="Name"
            // value={d}
            //   disabled
            // defaultValue={user?.name}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            helperText="쿠폰 설명"
            size="small"
            id="outlined-basic1"
            fullWidth
            // label="Name"
            // value={d}
            //   disabled
            // defaultValue={user?.name}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            helperText="할인율"
            size="small"
            id="outlined-basic1"
            fullWidth
            // label="Name"
            // value={d}
            //   disabled
            // defaultValue={user?.name}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            helperText="할인 가격"
            size="small"
            id="outlined-basic1"
            fullWidth
            // label="Name"
            // value={d}
            //   disabled
            // defaultValue={user?.name}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <DatePicker
            views={['day']}
            label="Just date"
            inputFormat="YYYY-MM-DD"
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                size="small"
                helperText="만료 기간"
              />
            )}
          />
        </Grid>
      </MainModal>
    </>
  );
}
