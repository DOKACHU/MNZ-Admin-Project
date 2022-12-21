import { BaseEntity } from '../../../types';

export type BookingType = {
  bookingId: string;
  userName: string;
  centerName: string;
  proName: string;
  productName: string;
  status: string;
  round: number;
  runningTime: number;
  pressure: number;
  bookingDate: string;
  requestComment: string;
  isCancel: boolean;
  deletedAt: string;
} & BaseEntity;

export const bookingTab = [
  {
    id: 0,
    label: '예약 상세내역',
    to: '#',
  },
  {
    id: 1,
    label: '진료 차트',
    to: '#',
  },
];

export const mockTimeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${
      index % 2 === 0 ? '00' : '30'
    }`
);

export const detailsIconSX = {
  width: 15,
  height: 15,
  verticalAlign: 'text-top',
  mr: 0.5,
  mt: 0.25,
};

export const styleH4 = {
  color: '#212121',
  fontSize: 14,
  fontWeight: 600,
};

export const styleSubtitle = {
  color: '#212121',
  fontSize: 14,
  fontWeight: 500,
};
