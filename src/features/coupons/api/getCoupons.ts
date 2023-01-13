import { useQuery } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerCouponType, CouponsType } from '../types';

export const getCoupons = async (
  page: number,
  rowsPerPage: number
): Promise<ServerCouponType> => {
  const result = await axios.get<ServerCouponType>(
    `coupons/?cursor=${page + 1}&per_page=${rowsPerPage}`
  );
  return {
    total_count: result.data.total_count,
    couponList: result.data.couponList,
  };
};

type QueryFnType = typeof getCoupons;

type UseCouponsOptions = {
  config?: QueryConfig<QueryFnType>;
  page: number;
  rowsPerPage: number;
};

export const useCoupons = ({
  config,
  page,
  rowsPerPage,
}: UseCouponsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['coupons', page, rowsPerPage],
    queryFn: () => getCoupons(page, rowsPerPage),
  });
};
