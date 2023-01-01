import { BaseEntity } from '../../../types';

export type ProType = {
  proId: string;
  name: string;
  phoneNumber: string;
  description: string;
  profileImage: string;
  centerId: string;
} & BaseEntity;

export type ServerProType = {
  total_count: number;
  proList: ProType[];
};
