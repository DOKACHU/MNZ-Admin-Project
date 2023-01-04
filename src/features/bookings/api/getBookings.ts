import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { BookingType, ServerBookingType } from '../types';

export const getBookings = async (): Promise<BookingType[]> => {
  const result = await axios.get<ServerBookingType>(
    `bookings/?cursor=1&per_page=100`
  );
  return result.data.bookingList;
};

type QueryFnType = typeof getBookings;

type UseBookingsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useBookings = ({ config }: UseBookingsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['bookings'],
    queryFn: () => getBookings(),
  });
};
