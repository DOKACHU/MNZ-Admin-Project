export const couponInit = {
  // coupon_id: '',
  title: '',
  description: '',
  discountRate: '',
  discountPrice: '',
  startPeriod: null,
  closePeriod: null,
  // isDeleted: false,
  // createdAt: '2022-09-28T12:38:15.223Z',
  // updatedAt: '2022-09-28T12:38:15.223Z',
  // deletedAt: null,
};

export const productInit = {
  // proId: '',
  // centerId: '',
  name: '',
  description: '',
  price: '',
  runningTime: '',
  discountRate: '',
  progressNumber: '',

  // TODO:두 부분은 실제 center 와 prod 로 변경해야함
  centerId: '3753b4df-0a3b-43bf-8d94-aceb1745cfe1',
  proId: '30a12e6e-f726-4514-8da4-2ab45bbf959b',
};

export const centerInit = {
  center: {
    name: '',
    description: '',
    address: '',
  },
  businessHours: [],
  images: '',
};

export const proInit = {
  name: '',
  description: '',
  phoneNumber: '',
  centerId: '3753b4df-0a3b-43bf-8d94-aceb1745cfe1',
};

export const pointInit = {
  userId: 'd39df513-b124-4a00-b8fe-96ae9a0b13c9',
  status: 'add',
  price: '',
  reason: '',
};
