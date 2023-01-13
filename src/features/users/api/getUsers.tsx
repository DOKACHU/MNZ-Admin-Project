import { useQuery } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerUserType } from '../types';

export const getUsers = async (
  page: number,
  rowsPerPage: number
): Promise<ServerUserType> => {
  const result = await axios.get<ServerUserType>(
    `users/?cursor=${page + 1}&per_page=${rowsPerPage}`
  );
  return {
    total_count: result.data.total_count,
    userList: result.data.userList,
  };
};

type QueryFnType = typeof getUsers;

type UseCouponsOptions = {
  config?: QueryConfig<QueryFnType>;
  page: number;
  rowsPerPage: number;
};

export const useUsers = ({ config, page, rowsPerPage }: UseCouponsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['users', page, rowsPerPage],
    queryFn: () => getUsers(page, rowsPerPage),
  });
};
