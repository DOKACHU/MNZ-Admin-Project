/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useState } from 'react';

const GetListAPI = async (BaseURL: string) => {
  const URL = `${BaseURL}?per_page=10&cursor=1`;
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
  // const [fetchList, setFetchList] = useState<any>([]);
  const queryClient = useQueryClient();
  const [post, setPost] = useState<any>(Init);
  const { data, isLoading } = useQuery(['lists'], () => GetListAPI(BaseURL));

  const { mutate } = useMutation((body) => PostListAPI(BaseURL, body), {
    mutationKey: 'create',
    onSuccess: () => {
      queryClient.invalidateQueries('lists');
    },
  });

  const handleSubmit = () => {
    mutate(post, {
      onSuccess: () => {
        setPost(Init);
        alert('쿠폰 생성 성공');
      },
    });
  };

  const handleCreateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  // const handleDelete = (id: number) => {
  //   const result = fetchList.filter((list: any) => list.id !== Number(id));
  //   setFetchList(result);
  // };

  return {
    fetchList: data,
    isLoading,
    handleCreateChange,
    handleSubmit,
    createInfo: post,
    setCreateInfo: setPost,
  };
}
