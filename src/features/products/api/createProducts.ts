import { AnyObject } from '@mswjs/data/lib/glossary';
import { useMutation } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
// import { useNotificationStore } from '@/stores/notifications';

import { ServerProductType } from '../types';

export type CreateProductsDTO = {
  data: {
    name: string;
    description: string;
    runningTime: number;
    progressNumber: number;
    price: number;
    centerId: string;
    proId: string;
  };
};

export const createProducts = ({
  data,
}: CreateProductsDTO): Promise<AnyObject> => {
  return axios.post(`products`, data);
};

type UseCreateCouponsOptions = {
  config?: MutationConfig<typeof createProducts>;
};

export const useCreateProducts = ({ config }: UseCreateCouponsOptions = {}) => {
  // const { addNotification } = useNotificationStore();
  return useMutation({
    onError: (_, __, context: any) => {
      if (context?.previousCoupons) {
        queryClient.setQueryData(['products'], context.previousCoupons);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
      alert('상품을 추가 하였습니다.');
      // addNotification({
      //   type: 'success',
      //   title: 'Discussion Created',
      // });
    },
    ...config,
    mutationFn: createProducts as any,
  });
};
