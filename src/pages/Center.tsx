/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  TableRow,
  TableCell,
  Checkbox,
  Grid,
  TextField,
  Button,
  Autocomplete,
} from '@mui/material';
import { ListTemplate } from '../template';
import { MainTable } from '../components';
import {
  centerColumns,
  stableSort,
  getComparator,
  CENTER_BASE_API,
  centerInit,
} from '../constansts';
import { useGetLists } from '../hooks';

const top100Films = [
  { label: '월', dayOfWeek: 1 },
  { label: '화', dayOfWeek: 2 },
  { label: '수', dayOfWeek: 3 },
  { label: '목', dayOfWeek: 4 },
  { label: '금', dayOfWeek: 5 },
  { label: '토', dayOfWeek: 6 },
  { label: '일', dayOfWeek: 7 },
];

export default function Center() {
  const {
    fetchList,
    isLoading,
    createInfo,
    setCreateInfo,
    handleCreateChange,
    handleCenterCreateChange,
    handleSubmit,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    order,
    orderBy,
    handleRowClick,
  } = useGetLists({ BaseURL: CENTER_BASE_API, Init: centerInit });

  const rows = fetchList?.centerList || [];
  const total = fetchList?.total_count || 0;

  const handleAddChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setCreateInfo({
      ...createInfo,
      businessHours: [
        ...createInfo.businessHours,
        {
          dayOfWeek: 7,
          startTime: '10:00',
          closeTime: '20:00',
        },
      ],
    });

    // const { name, value } = e.target;
  };

  return (
    <ListTemplate
      isButton
      title="센터"
      loading={isLoading}
      onSubmit={handleSubmit}
      createModalForm={
        <>
          <Grid item sm={12}>
            <TextField
              helperText="병원 이름"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="center.name"
              onChange={handleCenterCreateChange}
              value={createInfo.center.name}
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              helperText="병원 설명"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="center.description"
              onChange={handleCenterCreateChange}
              value={createInfo.center.description}
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              helperText="병원 주소"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="center.address"
              onChange={handleCenterCreateChange}
              value={createInfo.center.address}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" size="small" onClick={handleAddChange}>
              영업 시간 추가
            </Button>
          </Grid>

          {createInfo.businessHours.map((item: any, i: number) => {
            return (
              <>
                <Grid item md={2} xs={12}>
                  <Autocomplete
                    disableClearable
                    options={top100Films}
                    value={
                      top100Films[createInfo.businessHours[i].dayOfWeek - 1]
                    }
                    onSelect={handleCenterCreateChange}
                    // defaultValue={top100Films[0]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label=""
                        name={`businessHours.${i}.dayOfWeek`}
                        fullWidth
                        size="small"
                      />
                    )}
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <TextField
                    id="time"
                    label="Alarm clock"
                    type="time"
                    size="small"
                    onChange={handleCenterCreateChange}
                    value={createInfo.businessHours[i].startTime}
                    name={`businessHours.${i}.startTime`}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                    fullWidth
                    helperText="시작 시간 "
                  />
                </Grid>
                <Grid item md={5} xs={12}>
                  <TextField
                    id="time"
                    label="Alarm clock"
                    type="time"
                    size="small"
                    onChange={handleCenterCreateChange}
                    value={createInfo.businessHours[i].closeTime}
                    name={`businessHours.${i}.closeTime`}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                    fullWidth
                    helperText="마감 시간 "
                  />
                </Grid>
              </>
            );
          })}
        </>
      }
    >
      <MainTable
        columns={centerColumns}
        rows={rows}
        page={page}
        total={total}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      >
        {stableSort(rows || [], getComparator(order, orderBy))
          // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
