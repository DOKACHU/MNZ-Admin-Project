import { useQuery } from '@tanstack/react-query';

import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

import { ServerProType, ProType } from '../types';

export const getPros = async (
  page: number,
  rowsPerPage: number
): Promise<ServerProType> => {
  const result = await axios.get<ServerProType>(
    `pros/?cursor=${page + 1}&per_page=${rowsPerPage}`
  );

  return {
    total_count: result.data.total_count,
    proList: result.data.proList,
  };
};

type QueryFnType = typeof getPros;

type UseProsOptions = {
  config?: QueryConfig<QueryFnType>;
  page: number;
  rowsPerPage: number;
};

export const usePros = ({ config, page, rowsPerPage }: UseProsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['pros', page, rowsPerPage],
    queryFn: () => getPros(page, rowsPerPage),
  });
};
