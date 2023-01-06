import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { BookingType, ServerBookingType } from '../types';

export const getBooking = async ({
  bookingId,
}: {
  bookingId: string;
}): Promise<BookingType> => {
  const result = await axios.get(`bookings/${bookingId}`);
  return result.data;
  // const result = await axios.get<ServerBookingType>(
  //   `bookings/?cursor=1&per_page=100`
  // );
  // const detail = result.data.bookingList.filter(
  //   (list: any) => list.bookingId === bookingId
  // );
  // return detail[0];
};

type QueryFnType = typeof getBooking;

type UseCouponOptions = {
  bookingId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useBooking = ({ bookingId, config }: UseCouponOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['booking', bookingId],
    queryFn: () => getBooking({ bookingId }),
  });
};
