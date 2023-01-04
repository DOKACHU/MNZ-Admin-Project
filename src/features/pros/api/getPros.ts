import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerProType, ProType } from '../types';

export const getPros = async (): Promise<ProType[]> => {
  const result = await axios.get<ServerProType>(`pros/?cursor=1&per_page=100`);
  return result.data.proList;
};

type QueryFnType = typeof getPros;

type UseProsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const usePros = ({ config }: UseProsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['pros'],
    queryFn: () => getPros(),
  });
};
