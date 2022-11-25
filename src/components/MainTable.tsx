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

interface MainTableProps {
  rows?: any;
  columns?: any;
  children?: React.ReactNode;
  page: number;
  rowsPerPage: number;
  handleChangePage: any;
  handleChangeRowsPerPage: any;
  total: number;
}

export default function MainTable({
  rows,
  columns,
  children,
  page,
  total,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}: MainTableProps) {
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - total) : 0;

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
              rowCount={total}
              onRequestSort={undefined}
            />
            <TableBody>{children}</TableBody>
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53,
                }}
              >
                <TableCell colSpan={9} align="center">
                  데이터 없음
                </TableCell>
              </TableRow>
            )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={total}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
