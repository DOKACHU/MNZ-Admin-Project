import { useMutation } from 'react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
// import { useNotificationStore } from '@/stores/notifications';

import { CouponsType } from '../types';

export const deleteCoupon = ({ couponId }: { couponId: string }) => {
  return axios.delete(`/coupons/${couponId}`);
};

type UseDeleteCouponOptions = {
  config?: MutationConfig<typeof deleteCoupon>;
};

export const useDeleteCoupon = ({ config }: UseDeleteCouponOptions = {}) => {
  //   const { addNotification } = useNotificationStore();

  return useMutation({
    onMutate: async (deletedCoupon) => {
      await queryClient.cancelQueries('coupons');

      //   const previousDiscussions =
      //     queryClient.getQueryData<CouponsType[]>('coupons');

      //   queryClient.setQueryData(
      //     'coupons',
      //     previousDiscussions?.filter(
      //       (coupon) => coupon.couponId !== deletedCoupon.couponId
      //     )
      //   );

      //   return { previousDiscussions };
    },
    onError: (e, __, context: any) => {
      if (e) {
        alert('쿠폰 삭제에 실패했습니다.');
      }
      if (context?.previousDiscussions) {
        queryClient.setQueryData('coupons', context.previousDiscussions);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('coupons');
      alert('쿠폰 삭제가 완료되었습니다.');

      //   addNotification({
      //     type: 'success',
      //     title: 'Discussion Deleted',
      //   });
    },
    ...config,
    mutationFn: deleteCoupon as any,
  });
};
