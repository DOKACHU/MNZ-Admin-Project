/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const GetListAPI = async (BaseURL: string) => {
  const URL = `${BaseURL}?per_page=10&cursor=1`;
  const { data } = await axios.get(URL);
  return data;
};

interface GetListsProps {
  BaseURL: string;
}

export function useGetLists({ BaseURL }: GetListsProps) {
  // const [fetchList, setFetchList] = useState<any>([]);
  const { data, isLoading } = useQuery(['centers'], () => GetListAPI(BaseURL));

  // useEffect(() => {
  //   if (data) setFetchList(data);
  // }, [data]);

  // const handleDelete = (id: number) => {
  //   const result = fetchList.filter((list: any) => list.id !== Number(id));
  //   setFetchList(result);
  // };

  return { fetchList: data, isLoading };
}
