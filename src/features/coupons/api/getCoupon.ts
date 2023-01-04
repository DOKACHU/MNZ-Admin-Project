import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { CouponsType, ServerCouponType } from '../types';

export const getCoupon = async ({
  couponId,
}: {
  couponId: string;
}): Promise<CouponsType> => {
  const result = await axios.get<ServerCouponType>(
    `coupons/?cursor=1&per_page=100`
  );
  const detail = result.data.couponList.filter(
    (list: any) => list.couponId === couponId
  );
  return detail[0];
};

type QueryFnType = typeof getCoupon;

type UseCouponOptions = {
  couponId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useCoupon = ({ couponId, config }: UseCouponOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['coupon', couponId],
    queryFn: () => getCoupon({ couponId }),
  });
};
