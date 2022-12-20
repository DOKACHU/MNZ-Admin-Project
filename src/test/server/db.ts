/* eslint-disable @typescript-eslint/no-explicit-any */
import { factory, primaryKey } from '@mswjs/data';

const models = {
  coupons: {
    couponId: primaryKey(String),
    title: String,
    description: String,
    discountRate: Number,
    discountPrice: Number,
    startPeriod: String,
    closePeriod: String,
    isDeleted: Boolean,
    createdAt: Number,
    updatedAt: Number,
    deletedAt: Number,
  },
  bookings: {
    bookingId: primaryKey(String),
    userName: String,
    centerName: String,
    proName: String,
    productName: String,
    status: String,
    isCancel: Boolean,
    bookingDate: Number,
    startTime: Number,
    endTime: Number,
    round: Number,
    runningTime: Number,
    pressure: Number,
    requestComment: String,
    createdAt: Number,
    updatedAt: Number,
    deletedAt: Number,
    userId: String,
    proId: String,
    centerId: String,
    productId: String,
    voucherId: String,
  },
};

export const db = factory(models);

export type Model = keyof typeof db;

export const loadDb = () =>
  Object.assign(JSON.parse(window.localStorage.getItem('mnz-db') || '{}'));

export const persistDb = (model: Model) => {
  // console.log(import.meta.env.MODE);
  // if (import.meta.env.MODE === 'development') return;
  const data = loadDb();
  data[model] = db[model].getAll();
  window.localStorage.setItem('mnz-db', JSON.stringify(data));
};

export const initializeDb = () => {
  const database = loadDb();
  Object.entries(db).forEach(([key, model]) => {
    const dataEntres = database[key];
    if (dataEntres) {
      dataEntres?.forEach((entry: Record<string, any>) => {
        model.create(entry);
      });
    }
  });
};

export const resetDb = () => {
  window.localStorage.clear();
};

initializeDb();
