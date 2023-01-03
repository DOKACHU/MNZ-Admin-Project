import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ProType } from '../types';

export const getPro = async ({ proId }: { proId: string }): Promise<any> => {
  const result = await axios.get(`pros/?cursor=1&per_page=100`);
  const detail = result.proList.filter((list: any) => list.proId === proId);
  return detail[0];
};

type QueryFnType = typeof getPro;

type UseProOptions = {
  proId: string;
  config?: QueryConfig<QueryFnType>;
};

export const usePro = ({ proId, config }: UseProOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['pro', proId],
    queryFn: () => getPro({ proId }),
  });
};
