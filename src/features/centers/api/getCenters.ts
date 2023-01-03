import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerCenterType } from '../types';

export const getCenters = (): Promise<ServerCenterType> => {
  return axios.get(`centers/?cursor=1&per_page=100`);
};

type QueryFnType = typeof getCenters;

type UseCouponsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useCenters = ({ config }: UseCouponsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['centers'],
    queryFn: () => getCenters(),
  });
};
