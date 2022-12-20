export const mockReviewList = [
  {
    review_id: 1,
    centerId: 4,
    productId: '2b02b343-819f-4126-874e-9c8213bfc689',
    type: 'Good',
    content: '선생님이 너무 잘해주셨어요.',
    question1: 1,
    question2: 2,
    question3: 3,
    question4: 4,
    question5: 5,
    createAt: '2022-09-18',
  },
  {
    review_id: 2,
    centerId: 11,
    productId: '2b02b343-819f-4126-874e-9c8213bfc689',
    type: 'Bad',
    content: '시설이 너무 쾌적해지만, 선생님이 너무 불편해요.',
    question1: 2.5,
    question2: 3.2,
    question3: 1,
    question4: 4.4,
    question5: 5,
    createAt: '2022-09-18',
  },
];

export const mockBookList = [
  {
    bookId: '1',
    name: '고민구',
    pro: '김프로',
    location: '인천',
    target: '어깨',
    date: '2022-10-13',
    time: '30m',
    count: 8,
    createAt: '2022-10-10',
    updateAt: '2022-10-13',
  },
];

// country options
export const mockCountries = [
  { code: '00', label: '예약 취소' },
  { code: '01', label: '예약 진행중' },
  { code: '02', label: '예약 확인' },
];

export const mockTimeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${
      index % 2 === 0 ? '00' : '30'
    }`
);
