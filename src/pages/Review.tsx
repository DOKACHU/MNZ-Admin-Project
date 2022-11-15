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

  return (
    <ListTemplate title="리뷰 관리" isButton loading={isLoading}>
      <MainTable columns={reviewColumns} rows={mockReviewList}>
        {stableSort(mockReviewList || [], getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row: any, index: number) => {
            // const isItemSelected = isSelected(row.productId);
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
                {/* <TableCell>{row?.centerId}</TableCell> */}
                <TableCell>{row?.productId}</TableCell>
                <TableCell>{row?.type}</TableCell>
                <TableCell>{row?.content}</TableCell>
                <TableCell align="center">
                  <Rating
                    name="read-only"
                    value={row.question1}
                    precision={0.5}
                    readOnly
                  />
                </TableCell>
                <TableCell align="center">
                  <Rating
                    name="read-only"
                    value={row.question2}
                    precision={0.5}
                    readOnly
                  />
                </TableCell>{' '}
                <TableCell align="center">
                  <Rating
                    name="read-only"
                    value={row.question3}
                    precision={0.5}
                    readOnly
                  />
                </TableCell>{' '}
                <TableCell align="center">
                  <Rating
                    name="read-only"
                    value={row.question4}
                    precision={0.5}
                    readOnly
                  />
                </TableCell>{' '}
                <TableCell align="center">
                  <Rating
                    name="read-only"
                    value={row.question5}
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
