import { AnyObject } from '@mswjs/data/lib/glossary';
import { useMutation } from 'react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
// import { useNotificationStore } from '@/stores/notifications';

import { CouponsType } from '../types';

export type CreateCouponsDTO = {
  data: {
    title: string;
    description: string;
    discountRate: number;
    startPeriod: string;
  };
};

export const createCoupons = ({
  data,
}: CreateCouponsDTO): Promise<AnyObject> => {
  return axios.post(`/coupons`, data);
};

type UseCreateDiscussionOptions = {
  config?: MutationConfig<typeof createCoupons>;
};

export const useCreateCoupon = ({
  config,
}: UseCreateDiscussionOptions = {}) => {
  // const { addNotification } = useNotificationStore();
  return useMutation({
    onMutate: async (newCoupons: any) => {
      await queryClient.cancelQueries('coupons');

      const previousCoupons =
        queryClient.getQueryData<CouponsType[]>('coupons');

      queryClient.setQueryData('coupons', [
        ...(previousCoupons || []),
        newCoupons.data,
      ]);

      return { previousCoupons };
    },
    onError: (_, __, context: any) => {
      if (context?.previousDiscussions) {
        queryClient.setQueryData('discussions', context.previousDiscussions);
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
    mutationFn: createCoupons,
  });
};
