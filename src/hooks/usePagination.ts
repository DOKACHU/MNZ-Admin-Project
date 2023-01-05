import { useState } from 'react';

export function usePagination() {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const handleChangeRowsPerPage = (e: any) => {
    const parsedInt = parseInt(e.target.value, 10);
    setRowsPerPage(parsedInt);
    setPage(0);
  };

  const handleChangePage = (e: any, newPage: any) => {
    setPage(newPage);
  };

  // useEffect(() => {
  //   console.log('');
  // }, [page, rowsPerPage]);

  return {
    page,
    rowsPerPage,
    handleChangeRowsPerPage,
    handleChangePage,
  };
}
