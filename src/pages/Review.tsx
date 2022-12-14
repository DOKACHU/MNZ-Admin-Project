/* eslint-disable react/no-array-index-key */
import React from 'react';
import { TableRow, TableCell, Checkbox, Rating } from '@mui/material';
import { ListTemplate } from '../template';
import { MainTable } from '../components';
import {
  reviewColumns,
  stableSort,
  getComparator,
  REVIEW_BASE_API,
} from '../constansts';
import { useGetLists } from '../hooks';

export default function Review() {
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
    BaseURL: REVIEW_BASE_API,
  });

  const rows = fetchList?.reviewList || [];
  const total = fetchList?.total_count || 0;

  const newReviewList = rows?.map((list: any) => {
    const { rating1, rating2, rating3, rating4, rating5 } = list;
    const calcAverage = (rating1 + rating2 + rating3 + rating4 + rating5) / 5;
    return {
      ...list,
      average: calcAverage,
    };
  });

  return (
    <ListTemplate
      title="리뷰"
      // isButton
      onSubmit={handleSubmit}
      loading={isLoading}
    >
      <MainTable
        columns={reviewColumns}
        rows={newReviewList}
        page={page}
        total={total}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      >
        {stableSort(newReviewList || [], getComparator(order, orderBy))
          // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row: any, index: number) => {
            // const isItemSelected = isSelected(row.productId);
            // console.log('row', Math.ceil(row?.average));
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <TableRow
                key={index}
                hover
                onClick={(e: any) => {
                  handleRowClick(e, row.reviewId);
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
                {/* <TableCell>{row?.reviewId}</TableCell>
                <TableCell>{row?.userId}</TableCell>
                <TableCell>{row?.centerId}</TableCell> */}
                <TableCell>{row?.bookingId}</TableCell>
                <TableCell>{row?.satisfied ? '만족' : '불만족'}</TableCell>
                <TableCell
                  sx={{
                    maxWidth: 200, // percentage also works
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {row?.comment}
                </TableCell>
                <TableCell align="center">
                  <Rating
                    name="read-only"
                    value={Math.ceil(row?.average)}
                    precision={0.5}
                    readOnly
                  />
                </TableCell>
              </TableRow>
            );
          })}
      </MainTable>
    </ListTemplate>
  );
}
