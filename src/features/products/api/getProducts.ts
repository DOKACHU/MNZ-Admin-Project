import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerProductType } from '../types';

export const getProducts = (): Promise<ServerProductType> => {
  return axios.get(`products/?cursor=1&per_page=10`);
};

type QueryFnType = typeof getProducts;

type UseCouponsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useProducts = ({ config }: UseCouponsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });
};
