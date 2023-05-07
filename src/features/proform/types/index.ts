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

export type EntryProType = {
  proEntryId: string;
  proName: string;
  gender: string;
  city: string;
  therapyCategory: string;
  description: string;
} & BaseEntity;

export type ServerEntryType = {
  total_count: number;
  bookingList: EntryProType[];
};
