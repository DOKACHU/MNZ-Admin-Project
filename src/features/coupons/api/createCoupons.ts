import { AnyObject } from '@mswjs/data/lib/glossary';
import { useMutation } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
// import { useNotificationStore } from '@/stores/notifications';

import { CouponsType, ServerCouponType } from '../types';

export type CreateCouponsDTO = {
  data: {
    couponCode: string;
    title: string;
    description: string;
    discountRate: number;
    discountPrice: number;
    startPeriod: string;
    closePeriod: string;
  };
};

export const createCoupons = ({
  data,
}: CreateCouponsDTO): Promise<AnyObject> => {
  return axios.post(`/coupons`, data);
};

type UseCreateCouponsOptions = {
  config?: MutationConfig<typeof createCoupons>;
};

export const useCreateCoupon = ({ config }: UseCreateCouponsOptions = {}) => {
  // const { addNotification } = useNotificationStore();
  return useMutation({
    onError: (_, __, context: any) => {
      if (context?.previousCoupons) {
        queryClient.setQueryData(['coupons'], context.previousCoupons);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['coupons']);
      alert('새로운 쿠폰이 추가되었습니다.');
      // addNotification({
      //   type: 'success',
      //   title: 'Discussion Created',
      // });
    },
    ...config,
    mutationFn: createCoupons as any,
  });
};
