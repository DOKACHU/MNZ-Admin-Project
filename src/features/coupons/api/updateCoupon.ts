/* eslint-disable no-alert */
import { useMutation } from 'react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query'; // import { useNotificationStore } from '@/stores/notifications';

import { CouponsType } from '../types';

export type UpdateDiscussionDTO = {
  data: {
    title: string;
    description: string;
    discountRate: number;
    discountPrice: number;
    startPeriod: string;
    closePeriod: string;
  };
  couponId: string;
};

export const updateCoupon = ({
  data,
  couponId,
}: UpdateDiscussionDTO): Promise<CouponsType> => {
  return axios.patch(`/coupons/${couponId}`, data);
};

type UseUpdateDiscussionOptions = {
  config?: MutationConfig<typeof updateCoupon>;
  couponId?: string;
};

export const useUpdateCoupon = ({
  config,
}: UseUpdateDiscussionOptions = {}) => {
  // const { addNotification } = useNotificationStore();

  return useMutation({
    onMutate: async (updatingDiscussion: any) => {
      await queryClient.cancelQueries(['coupon', updatingDiscussion?.couponId]);

      const previousDiscussion = queryClient.getQueryData<CouponsType>([
        'coupon',
        updatingDiscussion?.couponId,
      ]);

      queryClient.setQueryData(['coupon', updatingDiscussion?.couponId], {
        ...previousDiscussion,
        ...updatingDiscussion.data,
        couponId: updatingDiscussion.couponId,
      });

      return { previousDiscussion };
    },
    onError: (e: any, __, context: any) => {
      if (e) {
        alert('수정이 실패 하었습니다.');
      }
      if (context?.previousDiscussion) {
        queryClient.setQueryData(
          ['discussion', context.previousDiscussion.couponId],
          context.previousDiscussion
        );
      }
    },
    onSuccess: (data: any) => {
      queryClient.refetchQueries(['coupon', data.couponId]);
      alert('쿠폰이 수정되었습니다.');
      // addNotification({
      //   type: 'success',
      //   title: 'Discussion Updated',
      // });
    },
    ...config,
    mutationFn: updateCoupon as any,
  });
};
