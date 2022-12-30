import { BaseEntity } from '../../../types';

export type PointType = {
  pointEventId: string;
  userId: string;
  status: string;
  price: number;
  reason: string;
  reviewId: string;
  bookingId: string;
  serviceCode: string;
} & BaseEntity;

export type ServerPointType = {
  total_count: number;
  pointList: PointType[];
};
