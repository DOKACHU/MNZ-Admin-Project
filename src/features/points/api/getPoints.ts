import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerPointType } from '../types';

export const getPoints = (): Promise<ServerPointType> => {
  return axios.get(`points/?cursor=1&per_page=10`);
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
