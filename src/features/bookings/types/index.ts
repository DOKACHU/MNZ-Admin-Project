import { BaseEntity } from '../../../types';

export type BookingType = {
  bookingId: string;
  userName: string;
  centerName: string;
  proName: string;
  productName: string;
  status: string;
  round: number;
  runningTime: number;
  pressure: number;
  bookingDate: string;
  requestComment: string;
  isCancel: boolean;
  deletedAt: string;
} & BaseEntity;
