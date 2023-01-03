import { AnyObject } from '@mswjs/data/lib/glossary';
import { useMutation } from 'react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
// import { useNotificationStore } from '@/stores/notifications';

import { ServerCenterType } from '../types';

type BusinessHoursType = {
  dayOfWeek: number;
  startTime: string;
  closeTime: string;
  dayOflabel?: string;
};

export type CreateCentersDTO = {
  data: {
    center: {
      name: string;
      description: string;
      address: string;
    };
    businessHours: BusinessHoursType[];
    images: string;
  };
};

export const createCenters = ({
  data,
}: CreateCentersDTO): Promise<AnyObject> => {
  return axios.post(`/centers`, data);
};

type UseCreateCouponsOptions = {
  config?: MutationConfig<typeof createCenters>;
};

export const useCreateCenters = ({ config }: UseCreateCouponsOptions = {}) => {
  // const { addNotification } = useNotificationStore();
  return useMutation({
    onMutate: async (newCoupons: any) => {
      await queryClient.cancelQueries('centers');
      // mocking
      // const previousCoupons =
      //   queryClient.getQueryData<CouponsType[]>('coupons');

      //   queryClient.setQueryData('coupons', [
      //   ...(previousCoupons. || []),
      //   newCoupons.data,
      // ]);

      // server
      const previousCoupons =
        queryClient.getQueryData<ServerCenterType>('centers');

      queryClient.setQueryData('centers', [
        ...(previousCoupons?.centerList || []),
        newCoupons.data,
      ]);

      return { previousCoupons };
    },
    onError: (_, __, context: any) => {
      if (context?.previousCoupons) {
        queryClient.setQueryData('centers', context.previousCoupons);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('centers');
      alert('센터 정보 추가 하였습니다.');
      // addNotification({
      //   type: 'success',
      //   title: 'Discussion Created',
      // });
    },
    ...config,
    mutationFn: createCenters as any,
  });
};
