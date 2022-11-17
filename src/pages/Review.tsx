/* eslint-disable react/no-array-index-key */
import React from 'react';
import { TableRow, TableCell, Checkbox, Rating } from '@mui/material';
import { ListTemplate } from '../template';
import { MainTable } from '../components';
import {
  reviewColumns,
  stableSort,
  getComparator,
  CENTER_BASE_API,
  mockReviewList,
} from '../constansts';
import { useGetLists, useTableList } from '../hooks';

export default function Review() {
  const { fetchList, isLoading } = useGetLists({ BaseURL: CENTER_BASE_API });
  const { page, order, orderBy, rowsPerPage, handleRowClick } = useTableList(
    fetchList?.centerList || []
  );

  const newMockReviewList = mockReviewList.map((list) => {
    const { question1, question2, question3, question4, question5 } = list;
    const calcAverage =
      (question1 + question2 + question3 + question4 + question5) / 5;
    return {
      ...list,
      average: calcAverage,
    };
  });

  console.log('newMockReviewList', newMockReviewList);

  return (
    <ListTemplate title="리뷰 관리" isButton loading={isLoading}>
      <MainTable columns={reviewColumns} rows={newMockReviewList}>
        {stableSort(newMockReviewList || [], getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row: any, index: number) => {
            // const isItemSelected = isSelected(row.productId);
            // console.log('row', row);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <TableRow
                key={index}
                hover
                onClick={(e: any) => {
                  handleRowClick(e, row.review_id);
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
                <TableCell>{row?.review_id}</TableCell>
                <TableCell>{row?.productId}</TableCell>
                <TableCell>{row?.type}</TableCell>
                <TableCell>{row?.content}</TableCell>
                <TableCell align="center">
                  <Rating
                    name="read-only"
                    value={row?.average}
                    precision={0.1}
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
