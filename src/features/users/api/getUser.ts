/* eslint-disable @typescript-eslint/naming-convention */
import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { UserType } from '../types';

export const getUser = async ({
  userId,
}: {
  userId: string;
}): Promise<UserType> => {
  const result = await axios.get(`users/${userId}`);
  console.log({ result });
  return result.data;
};

type QueryFnType = typeof getUser;

type UseReviewOptions = {
  userId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useUser = ({ userId, config }: UseReviewOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['user', userId],
    queryFn: () => getUser({ userId }),
  });
};
