import { BaseEntity } from '../../../types';

export type CenterType = {
  centerId: string;
  name: string;
  type: null;
  latitude: null;
  longitude: null;
  address: string;
  description: string;
} & BaseEntity;

export type ServerCenterType = {
  total_count: number;
  centerList: CenterType[];
};
