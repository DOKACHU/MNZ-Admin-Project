import { useQuery } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerProductType, ProductType } from '../types';

export const getProducts = async (
  page: number,
  rowsPerPage: number
): Promise<ServerProductType> => {
  const result = await axios.get<ServerProductType>(
    `products/?cursor=${page + 1}&per_page=${rowsPerPage}`
  );
  return {
    total_count: result.data.total_count,
    productList: result.data.productList,
  };
};

type QueryFnType = typeof getProducts;

type UseCouponsOptions = {
  config?: QueryConfig<QueryFnType>;
  page: number;
  rowsPerPage: number;
};

export const useProducts = ({
  config,
  page,
  rowsPerPage,
}: UseCouponsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['products', page, rowsPerPage],
    queryFn: () => getProducts(page, rowsPerPage),
  });
};
