import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

// import { ProType } from '../types';

export const getPoint = async ({
  pointId,
}: {
  pointId: string;
}): Promise<any> => {
  const result = await axios.get(`points/?cursor=1&per_page=100`);
  const detail = result.pointList.filter(
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
