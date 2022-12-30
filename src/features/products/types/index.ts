import { BaseEntity } from '../../../types';

export type ProductType = {
  productId: string;
  name: string;
  description: string;
  price: number;
  discountRate: number;
  runningTime: number;
  progressNumber: number;
  centerId: string;
  proId: string;
} & BaseEntity;

export type ServerProductType = {
  total_count: number;
  productList: ProductType[];
};
