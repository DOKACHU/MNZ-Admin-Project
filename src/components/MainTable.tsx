/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Checkbox,
  TableBody,
  TablePagination,
} from '@mui/material';
import MainTableHead from './MainTableHead';

import { useTableList } from '../hooks';

interface MainTableProps {
  rows?: any;
  columns?: any;
  children?: React.ReactNode;
}

export default function MainTable({ rows, columns, children }: MainTableProps) {
  const {
    page,
    emptyRows,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useTableList(rows);

  return (
    <Box
      sx={{
        width: '100%',
        background: '#fff',
        // minHeight: 'calc(100vh - 260px)',
      }}
    >
      <Paper sx={{ width: '100%', mb: 2 }} elevation={0}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }}>
            <MainTableHead
              columns={columns}
              onSelectAllClick={undefined}
              order=""
              orderBy=""
              numSelected={[]}
              rowCount={0}
              onRequestSort={undefined}
            />
            <TableBody>{children}</TableBody>
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
