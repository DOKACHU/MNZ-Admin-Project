import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerPointType, PointType } from '../types';

export const getPoints = async (
  page: number,
  rowsPerPage: number
): Promise<ServerPointType> => {
  const result = await axios.get<ServerPointType>(
    `points/?cursor=${page + 1}&per_page=${rowsPerPage}`
  );
  return {
    total_count: result.data.total_count,
    pointList: result.data.pointList,
  };
};

type QueryFnType = typeof getPoints;

type UseCouponsOptions = {
  config?: QueryConfig<QueryFnType>;
  page: number;
  rowsPerPage: number;
};

export const usePoints = ({ config, page, rowsPerPage }: UseCouponsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['points', page, rowsPerPage],
    queryFn: () => getPoints(page, rowsPerPage),
  });
};
