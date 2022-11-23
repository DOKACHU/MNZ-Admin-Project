/* eslint-disable react/no-array-index-key */
import React from 'react';
import { TableRow, TableCell, Checkbox, Grid, TextField } from '@mui/material';
import { ListTemplate } from '../template';
import { MainTable, MainModal } from '../components';
import {
  centerColumns,
  stableSort,
  getComparator,
  CENTER_BASE_API,
  centerInit,
} from '../constansts';
import { useGetLists, useTableList, useModal } from '../hooks';

export default function Center() {
  const { open, handleOpen } = useModal();

  const {
    fetchList,
    isLoading,
    createInfo,
    setCreateInfo,
    handleCreateChange,
    handleSubmit,
  } = useGetLists({ BaseURL: CENTER_BASE_API, Init: centerInit });

  const { page, order, orderBy, rowsPerPage, handleRowClick } = useTableList(
    fetchList?.centerList || []
  );

  return (
    <ListTemplate
      isButton
      title="센터"
      loading={isLoading}
      open={open}
      onOpenModal={handleOpen}
      onSubmit={handleSubmit}
      createModalForm={
        <>
          <Grid item sm={12}>
            <TextField
              helperText="병원 이름"
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
              helperText="병원 설명"
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
              helperText="병원 주소"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="address"
              onChange={handleCreateChange}
              value={createInfo.address}
            />
          </Grid>
        </>
      }
    >
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
                  handleRowClick(e, row.centerId);
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
                <TableCell>{row?.centerId}</TableCell>
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
