/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { CENTER_LIST_API } from '../constansts';

const GetCenterListAPI = async () => {
  const URL = `${CENTER_LIST_API}?per_page=10&cursor=1`;
  const { data } = await axios.get(URL);
  return data;
};

export function useGetLists() {
  const [fetchList, setFetchList] = useState<any>([]);
  const { data, isLoading } = useQuery(['centers'], () => GetCenterListAPI());

  useEffect(() => {
    if (data) setFetchList(data);
  }, [data]);

  const handleDelete = (id: number) => {
    const result = fetchList.filter((list: any) => list.id !== Number(id));
    setFetchList(result);
  };

  return { fetchList, isLoading, handleDelete };
}
