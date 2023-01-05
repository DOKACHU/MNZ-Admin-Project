import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { BookingType, ServerBookingType } from '../types';

export const getBookings = async (
  page: number,
  rowsPerPage: number
): Promise<ServerBookingType> => {
  const result = await axios.get<ServerBookingType>(
    `bookings/?cursor=${page + 1}&per_page=${rowsPerPage}`
  );
  return {
    total_count: result.data.total_count,
    bookingList: result.data.bookingList,
  };
};

type QueryFnType = typeof getBookings;

type UseBookingsOptions = {
  config?: QueryConfig<QueryFnType>;
  page: number;
  rowsPerPage: number;
};

export const useBookings = ({
  config,
  page,
  rowsPerPage,
}: UseBookingsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['bookings', page, rowsPerPage],
    queryFn: () => getBookings(page, rowsPerPage),
  });
};
