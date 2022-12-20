// import { usersHandlers } from './users';
import { couponsHandlers } from './coupons';
import { bookingHandlers } from './bookings';

export const handlers = [...couponsHandlers, ...bookingHandlers];
