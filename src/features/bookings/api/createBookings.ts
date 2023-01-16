import { AnyObject } from '@mswjs/data/lib/glossary';
import { useMutation } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
// import { useNotificationStore } from '@/stores/notifications';

import { BookingType } from '../types';

export type CreateBookingDTO = {
  data: {
    userId: string;
    centerId: string;
    proId: number;
    productId: string;
    bookingDate: string;
    startTime: string;
    endTime: string;
    pressure: number;
    requestComment: string;
  };
};

export const createBookings = ({
  data,
}: CreateBookingDTO): Promise<BookingType> => {
  return axios.post(`/bookings`, data);
};

type UseCreateBookingsOptions = {
  config?: MutationConfig<typeof createBookings>;
};

export const useCreateBookings = ({
  config,
}: UseCreateBookingsOptions = {}) => {
  // const { addNotification } = useNotificationStore();
  return useMutation({
    onMutate: async (newBookings: any) => {
      await queryClient.cancelQueries(['bookings']);

      const previousBookings = queryClient.getQueryData<BookingType[]>([
        'bookings',
      ]);

      queryClient.setQueryData(
        ['bookings'],
        [...(previousBookings || []), newBookings.data]
      );

      return { previousBookings };
    },
    onError: (_, __, context: any) => {
      if (context?.previousBookings) {
        queryClient.setQueryData(['bookings'], context.previousBookings);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['bookings']);
      alert('예약 생성 완료');
      // addNotification({
      //   type: 'success',
      //   title: 'Discussion Created',
      // });
    },
    ...config,
    mutationFn: createBookings as any,
  });
};
