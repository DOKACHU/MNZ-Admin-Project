/* eslint-disable react/no-unused-prop-types */
import React from 'react';

import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel,
} from '@mui/material';

interface MainTableHeadProps {
  columns: any;
  onSelectAllClick: any;
  order: string;
  orderBy: string;
  numSelected: any[];
  rowCount: number;
  onRequestSort: any;
}

export default function MainTableHead({ columns }: MainTableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            // indeterminate={numSelected > 0 && numSelected < rowCount}
            // checked={rowCount > 0 && numSelected === rowCount}
            // onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {columns.map((headCell: any) => {
          return (
            <TableCell key={headCell.id}>
              <TableSortLabel>{headCell.label}</TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}
