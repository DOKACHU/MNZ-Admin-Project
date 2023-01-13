import { useQuery } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerReviewType, ReviewType } from '../types';

export const getReviews = async (
  page: number,
  rowsPerPage: number
): Promise<ServerReviewType> => {
  const result = await axios.get<ServerReviewType>(
    `reviews/?cursor=${page + 1}&per_page=${rowsPerPage}`
  );
  return {
    total_count: result.data.total_count,
    reviewList: result.data.reviewList,
  };
};

type QueryFnType = typeof getReviews;

type UseCouponsOptions = {
  config?: QueryConfig<QueryFnType>;
  page: number;
  rowsPerPage: number;
};

export const useReviews = ({
  config,
  page,
  rowsPerPage,
}: UseCouponsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['reviews', page, rowsPerPage],
    queryFn: () => getReviews(page, rowsPerPage),
  });
};
