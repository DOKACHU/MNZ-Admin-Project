/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  TableRow,
  TableCell,
  Checkbox,
  Grid,
  TextField,
  Typography,
  Box,
} from '@mui/material';
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
    createFileInput,

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
    handleCreateFileClick,
    createPreview,
    handleCreateUpload,
  } = useGetLists({
    BaseURL: '',
    Init: '',
  });
  const [toggle, setToggle] = useState(false);
  const rows = fetchList?.couponList || [];
  const total = fetchList?.total_count || 0;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <ListTemplate
      isButton
      title="푸시 알림"
      loading={isLoading}
      onSubmit={handleSubmit}
      setCreateInfo={setCreateInfo}
      createInfo={createInfo}
      createModalForm={
        <>
          <Grid item sm={12}>
            <TextField
              helperText="보낼 유저 아이디"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="userId"
              onChange={handleCreateChange}
              value={createInfo?.phoneNumber}
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              helperText="제목"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="title"
              onChange={handleCreateChange}
              value={createInfo?.phoneNumber}
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              helperText="보낼 내용"
              size="small"
              id="outlined-basic1"
              fullWidth
              rows={4}
              multiline
              name="content"
              // onChange={handleCreateChange}
              // value={createInfo?.phoneNumber}
            />
          </Grid>
          <Grid item xs={12} />

          <Grid item xs={12}>
            <Checkbox value={toggle} onChange={handleToggle} /> 이미지 추가
            {toggle && (
              <Box
                sx={{
                  border: '1px dotted #e5e5e5',
                  height: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={handleCreateFileClick}
              >
                <input
                  hidden
                  ref={createFileInput}
                  type="file"
                  name="imageFile"
                  accept="image/*"
                  onChange={handleCreateUpload}
                />
                {createPreview === null ? (
                  <Typography variant="subtitle2" align="center">
                    Upload/Change Image
                  </Typography>
                ) : (
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                    }}
                  >
                    <img
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                      src={createPreview}
                      alt="preview"
                    />
                  </div>
                )}
              </Box>
            )}
          </Grid>
        </>
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
