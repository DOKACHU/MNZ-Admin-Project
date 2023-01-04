import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerCenterType, CenterType } from '../types';

export const getCenters = async (): Promise<CenterType[]> => {
  const result = await axios.get<ServerCenterType>(
    `centers/?cursor=1&per_page=100`
  );
  return result.data.centerList;
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
