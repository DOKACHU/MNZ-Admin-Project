/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
// import { Apartment } from '@mui/icons-material';
// TODO: icon 넣기
export const mainNavbarItems = [
  {
    id: 8,
    label: 'Dashboard',
    route: '',
  },
  // {
  //   id: 0,
  //   label: '예약 관리',
  //   route: 'book',
  //   // icon: <Apartment />,
  // },
  // {
  //   id: 1,
  //   label: '센터 관리',
  //   route: 'center',
  //   // icon: <Apartment />,
  // },
  // {
  //   id: 2,
  //   label: '프로 관리',
  //   route: 'pro',
  // },
  // {
  //   id: 7,
  //   label: '고객 관리',
  //   route: 'user',
  // },
  // {
  //   id: 9,
  //   label: '결제 관리',
  //   route: 'payment',
  // },
  {
    id: 3,
    label: '쿠폰 관리',
    route: 'coupon',
  },
  // {
  //   id: 4,
  //   label: '상품 관리',
  //   route: 'product',
  // },
  // {
  //   id: 5,
  //   label: '리뷰 관리',
  //   route: 'review',
  // },
  // {
  //   id: 6,
  //   label: '포인트 관리',
  //   route: 'point',
  // },

  // {
  //   id: 7,
  //   label: '공지사항 관리',
  //   route: 'notice',
  // },
  // {
  //   id: 8,
  //   label: '푸시 알림 관리',
  //   route: 'notification',
  // },
];

export const reviewVoucherInfo = [
  { id: 1, label: 'ID' },
  { id: 2, label: '상품이름' },
  { id: 3, label: '상품가격' },
];

export const reviewBookingInfo = [
  { id: 1, label: '예약 ID', value: 'bookingId' },
  { id: 2, label: '예약 일시', value: 'bookingDate' },
  { id: 3, label: '시작 시간', value: 'startTime' },
  { id: 4, label: '마감 시간', value: 'endTime' },
  { id: 5, label: '진행된 횟수', value: 'round' },
];

export const reviewProInfo = [
  { id: 1, label: 'ID', value: 'proId' },
  { id: 2, label: '이름', value: 'name' },
  // { id: 3, label: '주소' },
  // { id: 3, label: '전화 번호' },
];

export const reviewCenterInfo = [
  { id: 1, label: 'ID', value: 'centerId' },
  { id: 2, label: '이름', value: 'name' },
  // { id: 3, label: '주소' },
  // { id: 3, label: '전화 번호' },
];
