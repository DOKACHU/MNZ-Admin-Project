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
  { id: 'id', field: 'id', label: '예약 번호' },
  { id: 'name', field: 'name', label: '유저 이름' },
  { id: 'pro', field: 'pro', label: '프로 이름' },
  { id: 'location', field: 'locaiton', label: '지역' },
  { id: 'target', field: 'target', label: '치료 부위' },
  { id: 'date', field: 'date', label: '예약 일자' },
  { id: 'time', field: 'time', label: '예약 시간' },
  { id: 'count', field: 'count', label: '치료 횟수' },
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
  { id: 'reviewId', field: 'reviewId', label: '리뷰 번호' },
  {
    id: 'writerId',
    field: 'writerId',
    label: '작성자',
  },
  {
    id: 'centerId',
    field: 'centerId',
    label: '센터 번호',
  },
  {
    id: 'bookingId',
    field: 'bookingId',
    label: '예약 번호',
  },
  { id: 'satisfied', field: 'satisfied', label: '만족 여부' },
  { id: 'comment', field: 'comment', label: '리뷰 내용' },
  { id: 'average', field: 'average', label: '평점' },

  // {
  //   id: 'question1',
  //   field: 'question1',
  //   label: '질문 1',
  // },
  // {
  //   id: 'question2',
  //   field: 'question2',
  //   label: '질문 2',
  // },
  // {
  //   id: 'question3',
  //   field: 'question3',
  //   label: '질문 3',
  // },
  // {
  //   id: 'question4',
  //   field: 'question4',
  //   label: '질문 4',
  // },
  // {
  //   id: 'question5',
  //   field: 'question5',
  //   label: '질문 5',
  // },
  // {
  //   id: 'createAt',
  //   field: 'createAt',
  //   label: '생성 일자',
  // },
];
