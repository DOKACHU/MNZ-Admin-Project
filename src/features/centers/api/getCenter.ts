import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { CenterType } from '../types';

export const getCenter = async ({
  centerId,
}: {
  centerId: string;
}): Promise<any> => {
  const result = await axios.get(`centers/?cursor=1&per_page=100`);
  const detail = result.centerList.filter(
    (list: any) => list.centerId === centerId
  );
  return detail[0];
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
