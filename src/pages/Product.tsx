import React from 'react';
import { TableRow, TableCell, Checkbox, Grid, TextField } from '@mui/material';

import { ListTemplate } from '../template';
import { MainTable, MainModal } from '../components';
import {
  productColumns,
  stableSort,
  getComparator,
  PRODUCT_BASE_API,
  productInit,
} from '../constansts';
import { useGetLists, useTableList, useModal } from '../hooks';

export default function Product() {
  const { open, handleOpen } = useModal();

  const {
    fetchList,
    isLoading,
    createInfo,
    setCreateInfo,
    handleCreateChange,
    handleSubmit,
  } = useGetLists({ BaseURL: PRODUCT_BASE_API, Init: productInit });
  const { page, order, orderBy, rowsPerPage, handleRowClick } = useTableList(
    fetchList?.productList || []
  );
  return (
    <>
      <ListTemplate
        title="상품 관리"
        isButton
        loading={isLoading}
        onOpenModal={handleOpen}
      >
        <MainTable columns={productColumns} rows={fetchList?.productList}>
          {stableSort(
            fetchList?.productList || [],
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
      <MainModal
        open={open}
        handleClose={handleOpen}
        handleCreate={handleSubmit}
        title="상품 생성 모달"
      >
        <Grid item sm={12}>
          <TextField
            helperText="상품 이름"
            size="small"
            id="outlined-basic1"
            fullWidth
            name="name"
            onChange={handleCreateChange}
            value={createInfo.name}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            helperText="상품 설명"
            size="small"
            id="outlined-basic1"
            fullWidth
            name="description"
            onChange={handleCreateChange}
            value={createInfo.description}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            helperText="가격"
            size="small"
            id="outlined-basic1"
            fullWidth
            name="price"
            onChange={handleCreateChange}
            value={createInfo.price}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            helperText="진행시간"
            size="small"
            id="outlined-basic1"
            fullWidth
            name="runningTime"
            onChange={handleCreateChange}
            value={createInfo.runningTime}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            helperText="진행횟수"
            size="small"
            id="outlined-basic1"
            fullWidth
            name="progressNumber"
            onChange={handleCreateChange}
            value={createInfo.progressNumber}
          />
        </Grid>
      </MainModal>
    </>
  );
}
