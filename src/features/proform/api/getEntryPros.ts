/* eslint-disable @typescript-eslint/no-use-before-define */
import { useQuery } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerEntryType } from '../types';

export const getEntryPros = async (
  page: number,
  rowsPerPage: number
): Promise<ServerEntryType> => {
  const result = await axios.get<ServerEntryType>(
    `entry/pros/?cursor=${page + 1}&per_page=${rowsPerPage}`
  );

  return {
    total_count: result.data.total_count,
    bookingList: result.data.bookingList,
  };
};

type QueryFnType = typeof getEntryPros;

type UseCouponsOptions = {
  config?: QueryConfig<QueryFnType>;
  page: number;
  rowsPerPage: number;
};

export const useEntryPros = ({
  config,
  page,
  rowsPerPage,
}: UseCouponsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['entrypros', page, rowsPerPage],
    queryFn: () => getEntryPros(page, rowsPerPage),
  });
};
