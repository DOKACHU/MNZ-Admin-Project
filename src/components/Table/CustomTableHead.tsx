import React from 'react';

import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel,
} from '@mui/material';

interface CustomTableHeadProps {
  columns: any;
}

export default function CustomTableHead({ columns }: CustomTableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {columns.map((headCell: any) => {
          return (
            <TableCell key={headCell.id}>
              <TableSortLabel>{headCell.title}</TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}
