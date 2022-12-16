/* eslint-disable import/no-named-default */
import { default as dayjs } from 'dayjs';

export const formatDate = (date: string) =>
  dayjs(date).format('YYYY-MM-DD HH:mm:ss');
// dayjs(date).format('MMMM D, YYYY h:mm A');
