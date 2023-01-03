import { AnyObject } from '@mswjs/data/lib/glossary';
import { useMutation } from 'react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
// import { useNotificationStore } from '@/stores/notifications';

import { ProType, ServerProType } from '../types';

export type CreateProsDTO = {
  data: {
    name: string;
    description: string;
    phoneNumber: string;
    centerId: string;
  };
};

export const createPros = ({ data }: CreateProsDTO): Promise<AnyObject> => {
  return axios.post(`pros`, data);
};

type UseCreateCouponsOptions = {
  config?: MutationConfig<typeof createPros>;
};

export const useCreatePros = ({ config }: UseCreateCouponsOptions = {}) => {
  // const { addNotification } = useNotificationStore();
  return useMutation({
    onMutate: async (newCoupons: any) => {
      await queryClient.cancelQueries('pros');
      // mocking
      // const previousCoupons =
      //   queryClient.getQueryData<CouponsType[]>('coupons');

      //   queryClient.setQueryData('coupons', [
      //   ...(previousCoupons. || []),
      //   newCoupons.data,
      // ]);

      // server
      const previousCoupons = queryClient.getQueryData<ServerProType>('pros');

      queryClient.setQueryData('pros', [
        ...(previousCoupons?.proList || []),
        newCoupons.data,
      ]);

      return { previousCoupons };
    },
    onError: (_, __, context: any) => {
      if (context?.previousCoupons) {
        queryClient.setQueryData('pros', context.previousCoupons);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('pros');
      alert('프로 정보를 추가 하였습니다.');
      // addNotification({
      //   type: 'success',
      //   title: 'Discussion Created',
      // });
    },
    ...config,
    mutationFn: createPros as any,
  });
};
