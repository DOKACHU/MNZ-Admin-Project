/* eslint-disable @typescript-eslint/naming-convention */
import { useQuery } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ReviewType } from '../types';

export const getReview = async ({
  reviewId,
}: {
  reviewId: string;
}): Promise<ReviewType> => {
  const result = await axios.get(`reviews/${reviewId}`);
  return result.data;
};

type QueryFnType = typeof getReview;

type UseReviewOptions = {
  reviewId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useReview = ({ reviewId, config }: UseReviewOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['review', reviewId],
    queryFn: () => getReview({ reviewId }),
  });
};
