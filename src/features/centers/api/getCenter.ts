import { useQuery } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { CenterType, ServerCenterType } from '../types';

export const getCenter = async ({
  centerId,
}: {
  centerId: string;
}): Promise<CenterType> => {
  const result = await axios.get(`centers/${centerId}`);
  return result.data;
  // const result = await axios.get<ServerCenterType>(
  //   `centers/?cursor=1&per_page=100`
  // );
  // const detail = result.data.centerList.filter(
  //   (list) => list.centerId === centerId
  // );
  // return detail[0];
};

type QueryFnType = typeof getCenter;

type UseCenterOptions = {
  centerId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useCenter = ({ centerId, config }: UseCenterOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['center', centerId],
    queryFn: () => getCenter({ centerId }),
  });
};
