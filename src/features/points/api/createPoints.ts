import { AnyObject } from '@mswjs/data/lib/glossary';
import { useMutation } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
// import { useNotificationStore } from '@/stores/notifications';

import { PointType, ServerPointType } from '../types';

export type CreatePointsDTO = {
  data: {
    userId: string;
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
    onError: (e: any, _, context: any) => {
      if (context?.previousCoupons) {
        queryClient.setQueryData(['points'], context.previousCoupons);
      }
      if (e.response.data.statusCode === 409) {
        alert('포인트가 부족합니다.');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['points']);
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
