import { BaseEntity } from '../../../types';

export type EntryCenterType = {
  centerEntryId: string;
  centerName: string;
  city: string;
  address1: string;
  address2: string;
  businessRegistrationNumber: string;
  memberCount: number;
  therapyCategory: string;
  phoneNumber: string;
  email: string;
  description: string;
} & BaseEntity;

export type ServerEntryType = {
  total_count: number;
  bookingList: EntryCenterType[];
};
