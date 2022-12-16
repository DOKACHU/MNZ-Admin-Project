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
  //   onSelectAllClick: any;
  //   order: string;
  //   orderBy: string;
  //   numSelected: any[];
  //   rowCount: number;
  //   onRequestSort: any;
}

export default function CustomTableHead({ columns }: CustomTableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Checkbox color="primary" />
        </TableCell>
        {columns?.map((headCell: any) => {
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
