/* eslint-disable consistent-return */
import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { API_URL } from '../../../config';

import { db, persistDb } from '../db';
import { delayedResponse } from '../utils';

// "title": "민수 쿠폰",
// "description": "이쁜 여성분만 다운받으세요",
// "discountRate": 10,
// "startPeriod": "2022-10-01"

type CreateCouponBody = {
  title: string;
  description: string;
  discountRate: number;
  startPeriod: string;
};

export const couponsHandlers = [
  // 쿠폰 리스트
  rest.post<CreateCouponBody>(`${API_URL}/coupons`, (req, res, ctx) => {
    try {
      // const user = requireAuth(req);
      const data = req.body;
      const result = db.coupons.create({
        // authorId: user.id,
        couponId: nanoid(),
        createdAt: Date.now(),
        // createdAt: Date.now(),
        ...data,
      });

      persistDb('coupons');
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' })
      );
    }
  }),

  // 쿠폰 리스트
  rest.get(`${API_URL}/coupons`, (req, res, ctx) => {
    try {
      // const cursor = req.url.searchParams.get('cursor');
      // const per_page = req.url.searchParams.get('per_page');
      // console.log({ cursor, per_page });

      const result = db.coupons.getAll();
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' })
      );
    }
  }),

  // rest.patch<ProfileBody>(`${API_URL}/users/profile`, (req, res, ctx) => {
  //   try {
  //     const user = requireAuth(req);
  //     const data = req.body;
  //     const result = db.user.update({
  //       where: {
  //         id: {
  //           equals: user.id,
  //         },
  //       },
  //       data,
  //     });
  //     persistDb('user');
  //     return delayedResponse(ctx.json(result));
  //   } catch (error: any) {
  //     return delayedResponse(
  //       ctx.status(400),
  //       ctx.json({ message: error?.message || 'Server Error' })
  //     );
  //   }
  // }),

  // rest.delete(`${API_URL}/users/:userId`, (req, res, ctx) => {
  //   try {
  //     const user = requireAuth(req);
  //     const { userId } = req.params;
  //     requireAdmin(user);
  //     const result = db.user.delete({
  //       where: {
  //         id: {
  //           equals: userId,
  //         },
  //         teamId: {
  //           equals: user.teamId,
  //         },
  //       },
  //     });
  //     persistDb('user');
  //     return delayedResponse(ctx.json(result));
  //   } catch (error: any) {
  //     return delayedResponse(
  //       ctx.status(400),
  //       ctx.json({ message: error?.message || 'Server Error' })
  //     );
  //   }
  // }),
];
