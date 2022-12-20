/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TablePagination,
  TableCell,
  Checkbox,
  CircularProgress,
} from '@mui/material';
import CustomTableHead from './CustomTableHead';
import CustomTableBody from './CustomTableBody';

import { stableSort, getComparator } from '../../constansts';

type TableColumn<Entry> = {
  id: string;
  title: string;
  field: keyof Entry;
  Cell?({ entry }: { entry: Entry }): React.ReactElement;
};

export type CustomTableProps<Entry> = {
  data: Entry[];
  columns: TableColumn<Entry>[];
  loading: boolean;
};
export function CustomTable<Entry extends { id: string }>({
  data,
  columns,
  loading,
}: CustomTableProps<Entry>) {
  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 310px)',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!data) return null;

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Paper sx={{ mt: 2 }} elevation={0}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }}>
            <CustomTableHead columns={columns} />
            <TableBody>
              {data.map((entry, entryIndex) => (
                <TableRow
                  hover
                  key={entry?.id || entryIndex}
                  role="checkbox"
                  tabIndex={-1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      inputProps={{
                        'aria-labelledby': `enhanced-table-checkbox-${entry.id}`,
                      }}
                    />
                  </TableCell>
                  {columns.map(({ Cell, field, id }, columnIndex) => (
                    <>
                      {Cell ? (
                        <TableCell>
                          <Cell entry={entry} />
                        </TableCell>
                      ) : (
                        <TableCell>{entry[field] as any}</TableCell>
                      )}
                    </>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" />{' '} */}
      </Paper>
    </Box>
  );
}

export default CustomTable;
