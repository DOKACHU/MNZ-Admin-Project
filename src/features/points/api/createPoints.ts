import { AnyObject } from '@mswjs/data/lib/glossary';
import { useMutation } from 'react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
// import { useNotificationStore } from '@/stores/notifications';

import { PointType, ServerPointType } from '../types';

export type CreatePointsDTO = {
  data: {
    userId: string;
    bookingId: string;
    reviewId: string;
    status: 'sub' | 'add';
    price: number;
    reason: string;
  };
};

export const createPoints = ({ data }: CreatePointsDTO): Promise<AnyObject> => {
  return axios.post(`/points`, data);
};

type UseCreateCouponsOptions = {
  config?: MutationConfig<typeof createPoints>;
};

export const useCreatePoint = ({ config }: UseCreateCouponsOptions = {}) => {
  // const { addNotification } = useNotificationStore();
  return useMutation({
    onMutate: async (newCoupons: any) => {
      await queryClient.cancelQueries('points');
      // mocking
      // const previousCoupons =
      //   queryClient.getQueryData<CouponsType[]>('coupons');

      //   queryClient.setQueryData('coupons', [
      //   ...(previousCoupons. || []),
      //   newCoupons.data,
      // ]);

      // server
      const previousCoupons =
        queryClient.getQueryData<ServerPointType>('points');

      queryClient.setQueryData('points', [
        ...(previousCoupons?.pointList || []),
        newCoupons.data,
      ]);

      return { previousCoupons };
    },
    onError: (e: any, _, context: any) => {
      if (context?.previousCoupons) {
        queryClient.setQueryData('points', context.previousCoupons);
      }
      if (e.response.data.statusCode === 409) {
        alert('포인트가 부족합니다.');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('points');
      alert('포인트가 적립 되었습니다.');
      // addNotification({
      //   type: 'success',
      //   title: 'Discussion Created',
      // });
    },
    ...config,
    mutationFn: createPoints as any,
  });
};
