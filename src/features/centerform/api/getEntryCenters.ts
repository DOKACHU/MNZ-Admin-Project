/* eslint-disable @typescript-eslint/no-use-before-define */
import { useQuery } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerEntryType, EntryCenterType } from '../types';

export const getEntryCenters = async (
  page: number,
  rowsPerPage: number
): Promise<ServerEntryType> => {
  const result = await axios.get<ServerEntryType>(
    `entry/centers/?cursor=${page + 1}&per_page=${rowsPerPage}`
  );

  return {
    total_count: result.data.total_count,
    bookingList: result.data.bookingList,
  };
};

type QueryFnType = typeof getEntryCenters;

type UseCouponsOptions = {
  config?: QueryConfig<QueryFnType>;
  page: number;
  rowsPerPage: number;
};

export const useEntryCenters = ({
  config,
  page,
  rowsPerPage,
}: UseCouponsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['entrycenters', page, rowsPerPage],
    queryFn: () => getEntryCenters(page, rowsPerPage),
  });
};
