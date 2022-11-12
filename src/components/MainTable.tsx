/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
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
import { stableSort, getComparator } from '../constansts';

interface MainTableProps {
  rows?: any;
  columns?: any;
}

export default function MainTable({ rows, columns }: MainTableProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const [order, setOrder] = useState<string>('asc');
  const [orderBy, setOrderBy] = useState<string>('calories');

  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [path, setPath] = useState<any>(null);

  const handleRowClick = (e, id) => {
    e.stopPropagation();
    // const { value } = e.target
    const URL = `/${path}/${id}`;
    navigate(URL);
    // window.open(URL, "_blank", "noopener,noreferrer");
  };

  const handleRequestSort = (e, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (e, name) => {
    e.stopPropagation();
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, '');
    setPath(parsedTitle);
  }, [location]);

  return (
    <Box
      sx={{
        width: '100%',
        background: '#fff',
        minHeight: 'calc(100vh - 260px)',
      }}
    >
      <Paper sx={{ width: '100%', mb: 2 }}>
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
            <TableBody
              sx={{
                border: '1px solid red',
                height: '640px',
              }}
            >
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.productId);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(e) => {
                        handleRowClick(e, row.productId);
                      }}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.productId}
                      selected={isItemSelected}
                    >
                      <TableCell
                        padding="checkbox"
                        // onClick={(e) => {
                        //   handleClick(e, row.productId);
                        // }}
                      >
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>

                      <TableCell>{row.productId}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>{row.price}</TableCell>
                      <TableCell>{row.runningTime}</TableCell>
                      <TableCell>{row.discountRate}</TableCell>
                      <TableCell>{row.progressNumber}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>

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
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        {/* pagination */}
      </Paper>
    </Box>
  );
}
