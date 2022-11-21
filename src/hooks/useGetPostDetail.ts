/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import axios from 'axios';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { mockReviewList } from '../constansts';

const GetDetailListAPI = async (BaseURL: string) => {
  const URL = `${BaseURL}?per_page=10&cursor=1`;
  const { data } = await axios.get(URL);
  return data;
};

const UpdateDetailAPI = async (
  BaseURL: string,
  RowId: string | undefined,
  Body: any
) => {
  const URL = `${BaseURL}/${RowId}`;
  const { data } = await axios.patch(URL, Body);
  return data;
};

const DeleteDetailAPI = async (BaseURL: string, RowId: string | undefined) => {
  const URL = `${BaseURL}/${RowId}`;
  const { data } = await axios.delete(URL);
  return data;
};

interface GetDetailProps {
  BaseURL: string;
}
export function useGetDetail({ BaseURL }: GetDetailProps) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const { id: rowId } = useParams();
  const [fetchPostDetail, setFetchPostDetail] = useState<any>(null);
  const [fetchMockPostDetail, setFetchMockPostDetail] = useState<any>(null);

  const { data, isLoading } = useQuery(['details'], () =>
    GetDetailListAPI(BaseURL)
  );

  useEffect(() => {
    if (data) {
      const path = location.pathname.split('/')[1];
      const list = data[`${path}List`];
      // const list = path === 'review' ? data.centerList : data[`${path}List`];
      const result = list?.filter((post: any) => {
        // if (path === 'review' || path === 'product') {
        //   const id = post[`${path}Id`];
        //   return id === rowId;
        // }
        const id = post[`${path}Id`];
        return id === rowId;
      });

      if (result) setFetchPostDetail(result[0]);
    }
  }, [data, location.pathname, rowId]);

  useEffect(() => {
    const result = mockReviewList?.filter((post: any) => {
      return post.review_id === Number(rowId);
    });
    setFetchMockPostDetail(result[0]);
  }, [rowId]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFetchPostDetail({ ...fetchPostDetail, [name]: value });
  };

  const { mutate: updateCoupon } = useMutation(
    (body: any) => UpdateDetailAPI(BaseURL, rowId, body),
    {
      mutationKey: 'updateCoupon',
      onSuccess: () => {
        queryClient.invalidateQueries('lists');
        queryClient.invalidateQueries('details');
        alert('변경 되었습니다.');
      },
    }
  );

  const { mutate: deleteCoupon } = useMutation(
    (body) => DeleteDetailAPI(BaseURL, rowId),
    {
      mutationKey: 'deleteCoupon',
      onSuccess: () => {
        navigate(-1);

        queryClient.invalidateQueries('lists');
        alert('삭제 되었습니다.');
      },
    }
  );

  const handleUpadate = () => {
    updateCoupon(fetchPostDetail, {
      onSuccess: () => {},
    });
  };

  const handleDelete = () => {
    deleteCoupon(fetchPostDetail, {
      onSuccess: () => {},
    });
  };

  return {
    fetchPostDetail,
    fetchMockPostDetail,
    isLoading,
    handleChange,
    handleUpadate,
    handleDelete,
  };
}
