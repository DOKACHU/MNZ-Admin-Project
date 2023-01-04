import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerProductType, ProductType } from '../types';

export const getProducts = async (): Promise<ProductType[]> => {
  const result = await axios.get<ServerProductType>(
    `products/?cursor=1&per_page=10`
  );
  return result.data.productList;
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
