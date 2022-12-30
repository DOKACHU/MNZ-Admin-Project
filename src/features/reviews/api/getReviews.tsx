import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerReviewType } from '../types';

export const getReviews = (): Promise<ServerReviewType> => {
  return axios.get(`reviews/?cursor=1&per_page=10`);
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
