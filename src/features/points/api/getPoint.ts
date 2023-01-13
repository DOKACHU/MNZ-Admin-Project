import { useQuery } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { PointType, ServerPointType } from '../types';

export const getPoint = async ({
  pointId,
}: {
  pointId: string;
}): Promise<PointType> => {
  const result = await axios.get<ServerPointType>(
    `points/?cursor=1&per_page=100`
  );
  const detail = result.data.pointList.filter(
    (list: any) => list.pointEventId === pointId
  );
  return detail[0];
};

type QueryFnType = typeof getPoint;

type UsePointOptions = {
  pointId: string;
  config?: QueryConfig<QueryFnType>;
};

export const usePoint = ({ pointId, config }: UsePointOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['point', pointId],
    queryFn: () => getPoint({ pointId }),
  });
};
