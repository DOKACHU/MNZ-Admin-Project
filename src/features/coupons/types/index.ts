import { BaseEntity } from '../../../types';

export type CouponsType = {
  couponId: string;
  title: string;
  description: string;
  discountRate: number;
  discountPrice: number;
  startPeriod: string;
  closePeriod: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
} & BaseEntity;

export type ServerCouponType = {
  total_count: number;
  couponList: CouponsType[];
};
