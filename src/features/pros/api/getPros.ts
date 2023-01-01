import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerProType } from '../types';

export const getPros = (): Promise<ServerProType> => {
  return axios.get(`pros/?cursor=1&per_page=10`);
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
