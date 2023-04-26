import { BaseEntity } from '../../../types';

export type EntryType = {
  test: string;
} & BaseEntity;

export type ServerEntryType = {
  total_count: number;
  entryList: EntryType[];
};
