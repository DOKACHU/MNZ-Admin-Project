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
import { useGetLists, useTableList, useModal } from '../hooks';

export default function Review() {
  const { fetchList, isLoading, handleSubmit } = useGetLists({
    BaseURL: REVIEW_BASE_API,
  });

  const { page, order, orderBy, rowsPerPage, handleRowClick } = useTableList(
    fetchList?.reviewList || []
  );
  const { open, handleOpen } = useModal();

  const newReviewList = fetchList?.reviewList?.map((list: any) => {
    const { rating1, rating2, rating3, rating4, rating5 } = list;
    const calcAverage = (rating1 + rating2 + rating3 + rating4 + rating5) / 5;
    return {
      ...list,
      average: calcAverage,
    };
  });

  return (
    <ListTemplate
      title="리뷰 관리"
      // isButton
      open={open}
      onOpenModal={handleOpen}
      onSubmit={handleSubmit}
      loading={isLoading}
    >
      <MainTable columns={reviewColumns} rows={newReviewList}>
        {stableSort(newReviewList || [], getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                <TableCell>{row?.reviewId}</TableCell>
                <TableCell>{row?.writerId}</TableCell>
                <TableCell>{row?.centerId}</TableCell>
                <TableCell>{row?.bookingId}</TableCell>
                <TableCell>{row?.satisfied ? '만족' : '불만족'}</TableCell>
                <TableCell>{row?.comment}</TableCell>
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
