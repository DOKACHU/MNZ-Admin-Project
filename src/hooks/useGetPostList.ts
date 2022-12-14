/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
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

const dayOfWeeks = [
  { label: '월', dayOfWeek: 1 },
  { label: '화', dayOfWeek: 2 },
  { label: '수', dayOfWeek: 3 },
  { label: '목', dayOfWeek: 4 },
  { label: '금', dayOfWeek: 5 },
  { label: '토', dayOfWeek: 6 },
  { label: '일', dayOfWeek: 7 },
];

export function useGetLists({ BaseURL, Init }: GetListsProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const createFileInput = useRef<any>(null);

  // const [fetchList, setFetchList] = useState<any>([]);
  const [post, setPost] = useState<any>(Init);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [path, setPath] = useState<any>(null);
  const [order, setOrder] = useState<string>('asc');
  const [orderBy, setOrderBy] = useState<string>('');
  const [createPreview, setCreatePreview] = useState<string | null>(null);

  const pagination = {
    page,
    rowsPerPage,
  };

  const { data, isLoading } = useQuery(
    ['lists', pagination],
    () => GetListAPI(BaseURL, pagination)
    // {
    //   refetchOnMount: true,
    // }
  );

  const { mutate } = useMutation((body) => PostListAPI(BaseURL, body), {
    mutationKey: 'create',
    onSuccess: () => {
      queryClient.invalidateQueries('lists');
    },
  });

  const handleCreateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleCreateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    const { files } = e.target;
    const reader = new FileReader();
    if (files) {
      const file = files[0];
      reader.onloadend = () => {
        setPost({ ...post, images: file });
        setCreatePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleCreateFileClick = (e: any) => {
    createFileInput.current.click();
  };

  const handleCenterCreateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    const { name, value } = e.target;
    const splited = name.split('.');
    if (splited[0] === 'center') {
      setPost({
        ...post,
        [splited[0]]: {
          ...post[splited[0]],
          [splited[1]]: value,
        },
      });
    } else {
      setPost({
        ...post,
        businessHours: [...post.businessHours]
          .filter((_: any, i) => i === Number(splited[1]))
          .map((item: any) => {
            let tmp = item[splited[2]];
            if (splited[2] === 'dayOfWeek') {
              tmp = dayOfWeeks.filter((item: any) => item.label === value)[0]
                .dayOfWeek;
            } else {
              tmp = value;
            }
            return { ...item, [splited[2]]: tmp };
          }),
      });
    }
  };

  const handleSubmit = () => {
    mutate(post, {
      onError: () => {
        setPost(Init);
        alert('오류가 발생했습니다.');
      },
      onSuccess: () => {
        setPost(Init);
        alert('리스트에 추가 되었습니다.');
      },
    });
  };

  const handlePointSubmit = () => {
    const newPost = {
      ...post,
      price: Number(post.price),
    };

    mutate(newPost, {
      onError: (e: any) => {
        if (e.response.data.statusCode === 409) {
          setPost(Init);
          alert('포인트가 부족합니다.');
        }
      },
      onSuccess: () => {
        setPost(Init);
        alert(
          `포인트가 ${newPost.status === 'add' ? '지급' : '차감'} 되었습니다.`
        );
      },
    });
  };

  const handleChangePage = (e: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e: any) => {
    const parsedInt = parseInt(e.target.value, 10);
    setRowsPerPage(parsedInt);
    setPage(0);
  };

  const handleRowClick = (e: any, id: number) => {
    e.stopPropagation();
    const URL = `/${path}/${id}`;
    navigate(URL);
  };

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, '');
    setPath(parsedTitle);
    // setFetchList(data);
  }, [location]);

  useEffect(() => {
    setPost(Init);
  }, []);

  return {
    createPreview,
    fetchList: data,
    isLoading,
    handleCreateChange,
    handleCenterCreateChange,
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
    handleCreateFileClick,
    createFileInput,
    handleCreateUpload,
    handlePointSubmit,
  };
}
