import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerCouponType, CouponsType } from '../types';

export const getCoupons = (): Promise<ServerCouponType> => {
  return axios.get(`coupons/?cursor=1&per_page=10`);
};

type QueryFnType = typeof getCoupons;

type UseCouponsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useCoupons = ({ config }: UseCouponsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['coupons'],
    queryFn: () => getCoupons(),
  });
};
