import { BaseEntity } from '../../../types';

export type CouponsType = {
  total_count: number;
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
