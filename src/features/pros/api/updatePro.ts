/* eslint-disable no-alert */
import { useMutation } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query'; // import { useNotificationStore } from '@/stores/notifications';

import { ProType } from '../types';

export type UpdateDiscussionDTO = {
  data: {
    name: string;
    description: string;
    phoneNumber: string;
  };
  proId: string;
};

export const updatePro = ({
  data,
  proId,
}: UpdateDiscussionDTO): Promise<ProType> => {
  return axios.patch(`/pros/${proId}`, data);
};

type UseUpdateDiscussionOptions = {
  config?: MutationConfig<typeof updatePro>;
  proId?: string;
};

export const useUpdateCoupon = ({
  config,
}: UseUpdateDiscussionOptions = {}) => {
  // const { addNotification } = useNotificationStore();

  return useMutation({
    onMutate: async (updatingDiscussion: any) => {
      await queryClient.cancelQueries(['pro', updatingDiscussion?.couponId]);

      const previousDiscussion = queryClient.getQueryData<ProType>([
        'pro',
        updatingDiscussion?.couponId,
      ]);

      queryClient.setQueryData(['pro', updatingDiscussion?.couponId], {
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
      queryClient.refetchQueries(['pro', data.couponId]);
      alert('정보가 수정되었습니다.');
      // addNotification({
      //   type: 'success',
      //   title: 'Discussion Updated',
      // });
    },
    ...config,
    mutationFn: updatePro as any,
  });
};
