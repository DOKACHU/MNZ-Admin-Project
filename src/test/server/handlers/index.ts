// import { usersHandlers } from './users';
import { couponsHandlers } from './coupons';
import { bookingHandlers } from './bookings';
import { chartsHandlers } from './charts';

export const handlers = [
  ...couponsHandlers,
  ...bookingHandlers,
  ...chartsHandlers,
];
