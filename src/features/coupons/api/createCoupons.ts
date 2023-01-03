import { AnyObject } from '@mswjs/data/lib/glossary';
import { useMutation } from 'react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
// import { useNotificationStore } from '@/stores/notifications';

import { CouponsType, ServerCouponType } from '../types';

export type CreateCouponsDTO = {
  data: {
    title: string;
    description: string;
    discountRate: number;
    discountPrice: number;
    startPeriod: string;
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
    onMutate: async (newCoupons: any) => {
      await queryClient.cancelQueries('coupons');
      // mocking
      // const previousCoupons =
      //   queryClient.getQueryData<CouponsType[]>('coupons');

      //   queryClient.setQueryData('coupons', [
      //   ...(previousCoupons. || []),
      //   newCoupons.data,
      // ]);

      // server
      const previousCoupons =
        queryClient.getQueryData<ServerCouponType>('coupons');

      queryClient.setQueryData('coupons', [
        ...(previousCoupons?.couponList || []),
        newCoupons.data,
      ]);

      return { previousCoupons };
    },
    onError: (_, __, context: any) => {
      if (context?.previousCoupons) {
        queryClient.setQueryData('coupons', context.previousCoupons);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('coupons');
      alert('생성 완료');
      // addNotification({
      //   type: 'success',
      //   title: 'Discussion Created',
      // });
    },
    ...config,
    mutationFn: createCoupons as any,
  });
};
