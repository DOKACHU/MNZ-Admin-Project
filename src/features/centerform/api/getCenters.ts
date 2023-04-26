/* eslint-disable @typescript-eslint/no-use-before-define */
import { useQuery } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerCenterType, CenterType } from '../types';

export const getCenters = async (
  page: number,
  rowsPerPage: number
): Promise<ServerCenterType> => {
  const result = await axios.get<ServerCenterType>(
    `centers/?cursor=${page + 1}&per_page=${rowsPerPage}`
  );

  return {
    total_count: result.data.total_count,
    centerList: result.data.centerList,
  };
};

type QueryFnType = typeof getCenters;

type UseCouponsOptions = {
  config?: QueryConfig<QueryFnType>;
  page: number;
  rowsPerPage: number;
};

export const useCenters = ({
  config,
  page,
  rowsPerPage,
}: UseCouponsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['centers', page, rowsPerPage],
    queryFn: () => getCenters(page, rowsPerPage),
  });
};
