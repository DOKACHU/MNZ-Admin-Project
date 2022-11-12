export const centerColumns = [
  { id: 'center_id', field: 'center_id', label: '센터 번호' },
  { id: 'name', field: 'name', label: '이름' },
  { id: 'address', field: 'address', label: '주소' },
  { id: 'description', field: 'description', label: '센터 설명' },
];

export const proColumns = [
  { id: 'pro_id', field: 'pro_id', label: '프로 번호' },
  { id: 'name', field: 'name', label: '프로 이름' },
  { id: 'phoneNumber', field: 'phoneNumber', label: 'H.P' },
  { id: 'description', field: 'description', label: '설명' },
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
