/* eslint-disable react/jsx-props-no-spreading */
import {
  TableRow,
  TableCell,
  Checkbox,
  Grid,
  TextField,
  Alert,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import { ListTemplate } from '../template';
import { MainTable } from '../components';
import {
  couponColumns,
  stableSort,
  getComparator,
  COUPON_BASE_API,
  couponInit,
} from '../constansts';
import { useGetLists } from '../hooks';

export default function Coupon() {
  // const [value, setValue] = useState(dayjs(new Date()));

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
    BaseURL: COUPON_BASE_API,
    Init: couponInit,
  });

  const rows = fetchList?.couponList || [];
  const total = fetchList?.total_count || 0;

  return (
    <ListTemplate
      isButton
      title="쿠폰"
      loading={isLoading}
      onSubmit={handleSubmit}
      createModalForm={
        <>
          <Grid item sm={12}>
            <TextField
              helperText="쿠폰 이름"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="title"
              onChange={handleCreateChange}
              value={createInfo.title}
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              helperText="쿠폰 설명"
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
              helperText="할인율"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="discountRate"
              onChange={handleCreateChange}
              value={createInfo.discountRate}
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              helperText="할인 가격"
              size="small"
              id="outlined-basic1"
              fullWidth
              name="discountPrice"
              value={createInfo.discountPrice}
              onChange={handleCreateChange}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <DatePicker
              // views={['day']}
              inputFormat="YYYY-MM-DD"
              value={createInfo.startPeriod}
              onChange={(newValue) => {
                setCreateInfo({
                  ...createInfo,
                  startPeriod: dayjs(newValue),
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  size="small"
                  helperText="시작 기간"
                />
              )}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <DatePicker
              // views={['day']}
              inputFormat="YYYY-MM-DD"
              value={createInfo.closePeriod}
              onChange={(newValue) => {
                setCreateInfo({
                  ...createInfo,
                  closePeriod: dayjs(newValue),
                });
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
        </>
      }
    >
      <MainTable
        columns={couponColumns}
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
            // console.log('row', row);
            // console.log('index', index);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <TableRow
                key={index}
                hover
                onClick={(e: any) => {
                  handleRowClick(e, row.couponId);
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
                <TableCell>{row?.couponId}</TableCell>
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
  );
}
