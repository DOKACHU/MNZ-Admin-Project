/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { v4 as uuidv4 } from 'uuid';

// import React, { useEffect } from 'react';
import {
  TableRow,
  TableCell,
  Checkbox,
  Grid,
  TextField,
  Autocomplete,
} from '@mui/material';
import { ListTemplate } from '../template';
import { MainTable } from '../components';
import {
  pointInit,
  PointColumns,
  stableSort,
  getComparator,
  POINT_BASE_API,
  statusArr,
} from '../constansts';
import { useGetLists } from '../hooks';

export default function Point() {
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
    handlePointSubmit,
  } = useGetLists({
    BaseURL: POINT_BASE_API,
    Init: pointInit,
  });

  const rows = fetchList?.pointList || [];
  const total = fetchList?.total_count || 0;
  console.log({ createInfo });

  const result = statusArr.filter((v) => v.id === createInfo?.status)[0];
  console.log({ result });

  return (
    <ListTemplate
      isButton
      title="포인트"
      loading={isLoading}
      onSubmit={handlePointSubmit}
      setCreateInfo={setCreateInfo}
      createInfo={createInfo}
      createModalForm={
        <>
          <Grid item sm={12}>
            <TextField
              helperText="유저 ID"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="userId"
              onChange={handleCreateChange}
              value={createInfo?.userId}
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              helperText="상태"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="status"
              onChange={handleCreateChange}
              value={createInfo?.status}
            />
          </Grid>

          {/* <Grid item sm={12}>
            <Autocomplete
              disableClearable
              options={statusArr}
              // defaultValue={statusArr[0]}
              onChange={(e, statusVal) => {
                setCreateInfo({ ...createInfo, status: statusVal.id });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="상태"
                  name="status"
                  fullWidth
                  // onChange={handleCreateChange}
                  size="small"
                />
              )}
            />
          </Grid> */}

          <Grid item sm={12}>
            <TextField
              helperText="포인트"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="price"
              onChange={handleCreateChange}
              value={createInfo?.price}
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              helperText="사유"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="reason"
              onChange={handleCreateChange}
              value={createInfo?.reason}
            />
          </Grid>
        </>
      }
    >
      <MainTable
        columns={PointColumns}
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
                  handleRowClick(e, row.pointEventId);
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
                <TableCell>{index + 1}</TableCell>
                {/* <TableCell>{row?.pointEventId}</TableCell> */}
                {/* <TableCell>{row?.userId}</TableCell> */}
                <TableCell>{row?.status}</TableCell>
                <TableCell>{row?.price}</TableCell>
                <TableCell>{row?.reason}</TableCell>
              </TableRow>
            );
          })}
      </MainTable>
    </ListTemplate>
  );
}
