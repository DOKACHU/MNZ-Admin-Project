import { BaseEntity } from '../../../types';

export type ReviewType = {
  reviewId: string;
  userId: string;
  productId: string;
  voucherId: string;
  proId: string;
  centerId: string;
  bookingId: string;
  satisfied: boolean;
  comment: string;
  rating1: number;
  rating2: number;
  rating3: number;
  rating4: number;
  rating5: number;
  avarage: number;
} & BaseEntity;

export type ServerReviewType = {
  total_count: number;
  pointList: ReviewType[];
};
