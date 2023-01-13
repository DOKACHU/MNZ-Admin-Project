import { useQuery } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ProductType, ServerProductType } from '../types';

export const getProduct = async ({
  productId,
}: {
  productId: string;
}): Promise<ProductType> => {
  const result = await axios.get<ServerProductType>(
    `products/?cursor=1&per_page=100`
  );
  const detail = result.data.productList.filter(
    (list: any) => list.productId === productId
  );
  return detail[0];
};

type QueryFnType = typeof getProduct;

type UsePointOptions = {
  productId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useProduct = ({ productId, config }: UsePointOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['product', productId],
    queryFn: () => getProduct({ productId }),
  });
};
