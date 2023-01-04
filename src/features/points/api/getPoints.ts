import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerPointType, PointType } from '../types';

export const getPoints = async (): Promise<PointType[]> => {
  const result = await axios.get<ServerPointType>(
    `points/?cursor=1&per_page=100`
  );
  return result.data.pointList;
};

type QueryFnType = typeof getPoints;

type UseCouponsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const usePoints = ({ config }: UseCouponsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['points'],
    queryFn: () => getPoints(),
  });
};
