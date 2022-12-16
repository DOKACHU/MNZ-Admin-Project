import React from 'react';
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TablePagination,
  TableCell,
} from '@mui/material';
import CustomTableHead from './CustomTableHead';
import CustomTableBody from './CustomTableBody';

import { stableSort, getComparator } from '../../constansts';

export default function CustomTable() {
  return (
    <Box>
      <Paper sx={{ mt: 2 }} elevation={0}>
        <TableContainer>
          <Table>
            <CustomTableHead columns={[]} />
          </Table>
          <TableBody>
            <CustomTableBody />
          </TableBody>
        </TableContainer>
        {/* <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" />{' '} */}
      </Paper>
    </Box>
  );
}
