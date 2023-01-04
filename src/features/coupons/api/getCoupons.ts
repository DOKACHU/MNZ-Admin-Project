import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerCouponType, CouponsType } from '../types';

export const getCoupons = async (): Promise<CouponsType[]> => {
  const result = await axios.get<ServerCouponType>(
    `coupons/?cursor=1&per_page=100`
  );
  return result.data.couponList;
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
