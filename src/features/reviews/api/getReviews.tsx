import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerReviewType, ReviewType } from '../types';

export const getReviews = async (): Promise<ReviewType[]> => {
  const result = await axios.get<ServerReviewType>(
    `reviews/?cursor=1&per_page=10`
  );
  return result.data.reviewList;
};

type QueryFnType = typeof getReviews;

type UseCouponsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useReviews = ({ config }: UseCouponsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['reviews'],
    queryFn: () => getReviews(),
  });
};
