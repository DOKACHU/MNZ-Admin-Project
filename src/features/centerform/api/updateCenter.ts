/* eslint-disable no-alert */
import { useMutation } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query'; // import { useNotificationStore } from '@/stores/notifications';

import { CenterType } from '../types';

type BusinessHoursType = {
  dayOfWeek: number;
  startTime: string;
  closeTime: string;
  dayOflabel?: string;
};

export type UpdateDiscussionDTO = {
  data: {
    center: {
      name: string;
      description: string;
      address: string;
    };
    businessHours: BusinessHoursType[];
    images: string;
  };
  centerId: string;
};

export const updateCenter = ({
  data,
  centerId,
}: UpdateDiscussionDTO): Promise<CenterType> => {
  return axios.patch(`/center/${centerId}`, data);
};

type UseUpdateDiscussionOptions = {
  config?: MutationConfig<typeof updateCenter>;
  centerId?: string;
};

export const useUpdateCenter = ({
  config,
}: UseUpdateDiscussionOptions = {}) => {
  // const { addNotification } = useNotificationStore();

  return useMutation({
    onMutate: async (updatingDiscussion: any) => {
      await queryClient.cancelQueries(['center', updatingDiscussion?.couponId]);

      const previousDiscussion = queryClient.getQueryData<CenterType>([
        'center',
        updatingDiscussion?.couponId,
      ]);

      queryClient.setQueryData(['center', updatingDiscussion?.couponId], {
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
      queryClient.refetchQueries(['center', data.couponId]);
      alert('쿠폰이 수정되었습니다.');
      // addNotification({
      //   type: 'success',
      //   title: 'Discussion Updated',
      // });
    },
    ...config,
    mutationFn: updateCenter as any,
  });
};
