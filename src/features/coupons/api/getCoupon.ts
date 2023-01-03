import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { CouponsType } from '../types';

export const getCoupon = async ({
  couponId,
}: {
  couponId: string;
}): Promise<any> => {
  const result = await axios.get(`coupons/?cursor=1&per_page=100`);
  const detail = result.couponList.filter(
    (list: any) => list.couponId === couponId
  );

  console.log(couponId, detail);
  return detail[0] || null;
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
