export const centerColumns = [
  { id: 'centerId', field: 'centerId', label: '센터 번호' },
  { id: 'name', field: 'name', label: '병원 이름' },
  { id: 'address', field: 'address', label: '병원 주소' },
  { id: 'description', field: 'description', label: '설명' },
];

export const proColumns = [
  { id: 'proId', field: 'proId', label: '프로 번호' },
  { id: 'name', field: 'name', label: '프로 이름' },
  { id: 'phoneNumber', field: 'phoneNumber', label: 'H.P' },
  { id: 'description', field: 'description', label: '설명' },
];

export const UserColumns = [
  { id: 'userId', field: 'userId', label: '고객 번호' },
  { id: 'name', field: 'name', label: '고객 이름' },
  { id: 'phoneNumber', field: 'phoneNumber', label: 'H.P' },
  // { id: 'description', field: 'description', label: '설명' },
];

export const couponColumns = [
  { id: 'coupon_id', field: 'coupon_id', label: '쿠폰 번호' },
  { id: 'title', field: 'title', label: '쿠폰 이름' },
  { id: 'description', field: 'description', label: '쿠폰 설명' },
  { id: 'discountRate', field: 'discountRate', label: '할인율' },
  { id: 'discountPrice', field: 'discountPrice', label: '할인 가격' },
  { id: 'startPeriod', field: 'startPeriod', label: '발급 기간' },
  { id: 'closePeriod', field: 'closePeriod', label: '만료 기간' },
  { id: 'isDeleted', field: 'isDeleted', label: '삭제 여부' },
];

export const bookColumns = [
  { id: 'bookingId', field: 'bookingId', label: '예약 번호' },
  { id: 'userName', field: 'userName', label: '유저 이름' },
  { id: 'centerName', field: 'centerName', label: '병원 이름' },
  { id: 'proName', field: 'proName', label: '프로 이름' },
  { id: 'status', field: 'status', label: '상태' },
  { id: 'isCancel', field: 'isCancel', label: '예약 취소' },
  { id: 'bookingDate', field: 'bookingDate', label: '예약 일자' },
];

export const productColumns = [
  { id: 'productId', field: 'productId', label: '상품 번호' },
  // { id: 'centerId', field: 'centerId', label: '센터 번호' },
  // { id: 'proId', field: 'proId', label: '프로 번호' },
  { id: 'name', field: 'name', label: '상품 이름' },
  { id: 'description', field: 'description', label: '상품 설명' },
  { id: 'price', field: 'price', label: '상품 가격' },
  { id: 'runningTime', field: 'runningTime', label: '진행 시간 ' },
  { id: 'discountRate', field: 'discountRate', label: '할인율' },
  { id: 'progressNumber', field: 'progressNumber', label: '치료 횟수' },
];

export const PointColumns = [
  { id: 'pointId', field: 'pointId', label: '포인트 번호' },
  { id: 'userId', field: 'userId', label: '고객 번호' },
  { id: 'point', field: 'point', label: '가진 포인트' },
  // { id: 'description', field: 'description', label: '설명' },
];

export const reviewColumns = [
  // { id: 'reviewId', field: 'reviewId', label: '리뷰 번호' },
  // {
  //   id: 'writerId',
  //   field: 'writerId',
  //   label: '작성자',
  // },
  // {
  //   id: 'centerId',
  //   field: 'centerId',
  //   label: '센터 번호',
  // },
  {
    id: 'bookingId',
    field: 'bookingId',
    label: '예약 번호',
  },
  { id: 'satisfied', field: 'satisfied', label: '만족 여부' },
  { id: 'comment', field: 'comment', label: '리뷰 내용' },
  { id: 'average', field: 'average', label: '평점' },
];

export const paymentColumns = [
  { id: 'paymentId', field: 'paymentId', label: ' 결제 번호' },
  // {
  //   id: 'writerId',
  //   field: 'writerId',
  //   label: '작성자',
  // },
  // {
  //   id: 'centerId',
  //   field: 'centerId',
  //   label: '센터 번호',
  // },
  // {
  //   id: 'bookingId',
  //   field: 'bookingId',
  //   label: '예약 번호',
  // },
  // { id: 'satisfied', field: 'satisfied', label: '만족 여부' },
  // { id: 'comment', field: 'comment', label: '리뷰 내용' },
  // { id: 'average', field: 'average', label: '평점' },
];

export const noticeColumns = [
  { id: 'noticeId', field: 'noticeId', label: ' 공지 번호' },
  // {
  //   id: 'writerId',
  //   field: 'writerId',
  //   label: '작성자',
  // },
  // {
  //   id: 'centerId',
  //   field: 'centerId',
  //   label: '센터 번호',
  // },
  // {
  //   id: 'bookingId',
  //   field: 'bookingId',
  //   label: '예약 번호',
  // },
  // { id: 'satisfied', field: 'satisfied', label: '만족 여부' },
  // { id: 'comment', field: 'comment', label: '리뷰 내용' },
  // { id: 'average', field: 'average', label: '평점' },
];

export const notificationColumns = [
  { id: 'notificationId', field: 'notificationId', label: ' 알림 번호' },
  // {
  //   id: 'writerId',
  //   field: 'writerId',
  //   label: '작성자',
  // },
  // {
  //   id: 'centerId',
  //   field: 'centerId',
  //   label: '센터 번호',
  // },
  // {
  //   id: 'bookingId',
  //   field: 'bookingId',
  //   label: '예약 번호',
  // },
  // { id: 'satisfied', field: 'satisfied', label: '만족 여부' },
  // { id: 'comment', field: 'comment', label: '리뷰 내용' },
  // { id: 'average', field: 'average', label: '평점' },
];
