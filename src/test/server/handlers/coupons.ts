/* eslint-disable consistent-return */
import { rest } from 'msw';

import { API_URL } from '../../../config';

import { db, persistDb } from '../db';
import { delayedResponse } from '../utils';

// type ProfileBody = {
//   email: string;
//   firstName: string;
//   lastName: string;
//   bio: string;
// };

export const couponsHandlers = [
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
