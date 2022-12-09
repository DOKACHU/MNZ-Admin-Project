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
  Radio,
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
  numberWithCommas,
  convertDate,
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

  return (
    <ListTemplate
      isButton
      title="포인트"
      loading={isLoading}
      onSubmit={handlePointSubmit}
      setCreateInfo={setCreateInfo}
      createInfo={pointInit}
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
            <Radio
              checked={createInfo?.status === 'add'}
              onChange={handleCreateChange}
              value="add"
              name="status"
              // inputProps={{ 'aria-label': 'A' }}
            />
            지급
            <Radio
              checked={createInfo?.status === 'sub'}
              onChange={handleCreateChange}
              value="sub"
              name="status"
              // inputProps={{ 'aria-label': 'B' }}
            />
            차감
          </Grid>

          <Grid item sm={12}>
            <TextField
              helperText="포인트"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="price"
              onChange={handleCreateChange}
              value={Number(createInfo?.price)}
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
                {/* <TableCell>{index + 1}</TableCell> */}
                <TableCell>{row?.pointEventId}</TableCell>
                <TableCell>
                  {row?.status === 'add' ? '지급' : ' 차감'}
                </TableCell>
                <TableCell>{numberWithCommas(row?.price)}</TableCell>
                <TableCell>{row?.reason}</TableCell>
                <TableCell>{convertDate(row?.createdAt)}</TableCell>
              </TableRow>
            );
          })}
      </MainTable>
    </ListTemplate>
  );
}
