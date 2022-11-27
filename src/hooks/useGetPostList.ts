/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const GetListAPI = async (BaseURL: string, pagination: any) => {
  const { page, rowsPerPage } = pagination;

  const URL = `${BaseURL}?per_page=${rowsPerPage}&cursor=${page + 1}`;
  const { data } = await axios.get(URL);
  return data;
};

const PostListAPI = async (BaseURL: string, Body: any) => {
  const URL = `${BaseURL}`;
  const { data } = await axios.post(URL, Body);
  return data;
};

interface GetListsProps {
  BaseURL: string;
  Init?: any;
}

export function useGetLists({ BaseURL, Init }: GetListsProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

  // const [fetchList, setFetchList] = useState<any>([]);
  const [post, setPost] = useState<any>(Init);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [path, setPath] = useState<any>(null);
  const [order, setOrder] = useState<string>('asc');
  const [orderBy, setOrderBy] = useState<string>('');

  const pagination = {
    page,
    rowsPerPage,
  };

  const { data, isLoading } = useQuery(['lists', pagination], () =>
    GetListAPI(BaseURL, pagination)
  );

  const { mutate } = useMutation((body) => PostListAPI(BaseURL, body), {
    mutationKey: 'create',
    onSuccess: () => {
      queryClient.invalidateQueries('lists');
    },
  });

  const handleSubmit = () => {
    mutate(post, {
      onError: () => {
        alert('오류가 발생했습니다.');
      },
      onSuccess: () => {
        setPost(Init);
        alert('리스트에 추가 되었습니다.');
      },
    });
  };

  const handleCreateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleChangePage = (e: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e: any) => {
    const parsedInt = parseInt(e.target.value, 10);
    setRowsPerPage(parsedInt);
    setPage(0);
  };

  // const handleDelete = (id: number) => {
  //   const result = fetchList.filter((list: any) => list.id !== Number(id));
  //   setFetchList(result);
  // };

  const handleRowClick = (e: any, id: number) => {
    e.stopPropagation();
    const URL = `/${path}/${id}`;
    navigate(URL);
  };

  const handleRequestSort = (e: any, property: any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, '');
    setPath(parsedTitle);
    // setFetchList(data);
  }, [location]);

  return {
    fetchList: data,
    isLoading,
    handleCreateChange,
    handleSubmit,
    createInfo: post,
    setCreateInfo: setPost,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    order,
    orderBy,
    handleRowClick,
  };
}
