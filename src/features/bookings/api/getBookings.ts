import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { BookingType } from '../types';

export const getBookings = (): Promise<BookingType[]> => {
  return axios.get(`bookings/?cursor=1&per_page=100`);
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
