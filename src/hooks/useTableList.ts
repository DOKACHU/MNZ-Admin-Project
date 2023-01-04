import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const pathMap: any = {
  bookings: 'bookingId',
  centers: 'centerId',
  coupons: 'couponId',
  reviews: 'reviewId',
  pros: 'proId',
  products: 'productId',
  points: 'pointEventId',
};

export function useTableList() {
  const navigate = useNavigate();
  const location = useLocation();

  const [order, setOrder] = useState<string>('asc');
  const [orderBy, setOrderBy] = useState<string>('calories');

  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [path, setPath] = useState<any>(null);
  const [rowId, setRowId] = useState<string>(null);

  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const handleRowClick = (e: any, id: number) => {
    e.stopPropagation();
    const URL = `/admin/${path}/${id}`;
    navigate(URL);
  };

  const handleRequestSort = (e: any, property: any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // const handleSelectAllClick = (e: any) => {
  //   if (e.target.checked) {
  //     const newSelected = rows.map((n: any) => n.name);
  //     setSelected(newSelected);
  //     return;
  //   }
  //   setSelected([]);
  // };

  const handleClick = (e: any, name: string) => {
    e.stopPropagation();
    const selectedIndex = selected.indexOf(name);
    let newSelected = [] as any;

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

  const handleChangePage = (e: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e: any) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    // const parsedTitle = location.pathname.replace(/\W/g, '');
    const splited = location.pathname.split('/')[2] || '';
    setPath(splited);
    setRowId(pathMap[splited]);
  }, [location]);

  return {
    page,
    order,
    orderBy,
    // emptyRows,
    rowId,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    isSelected,
    handleRowClick,
    handleRequestSort,
    // handleSelectAllClick,
    handleClick,

    handleChangePage,
    handleChangeRowsPerPage,
  };
}
