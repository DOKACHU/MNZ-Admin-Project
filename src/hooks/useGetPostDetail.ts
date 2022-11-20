/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import axios from 'axios';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { mockReviewList } from '../constansts';

const GetDetailrListAPI = async (BaseURL: string) => {
  const URL = `${BaseURL}?per_page=10&cursor=1`;
  const { data } = await axios.get(URL);
  return data;
};
interface GetDetailProps {
  BaseURL: string;
}
export function useGetDetail({ BaseURL }: GetDetailProps) {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const { id: rowId } = useParams();
  const [fetchPostDetail, setFetchPostDetail] = useState<any>(null);
  const [fetchMockPostDetail, setFetchMockPostDetail] = useState<any>(null);

  const { data, isLoading } = useQuery(['details'], () =>
    GetDetailrListAPI(BaseURL)
  );

  useEffect(() => {
    if (data) {
      const path = location.pathname.split('/')[1];
      const list = path === 'review' ? data.centerList : data[`${path}List`];
      const result = list?.filter((post: any) => {
        if (path === 'review' || path === 'product') {
          const id = post[`${path}Id`];
          return id === rowId;
        }
        const id = post[`${path}_id`];
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

  // const { mutate: updateCoupon } = useMutation((body) => PatchCouponAPI(body), {
  //   mutationKey: 'updateCoupon',
  //   onSuccess: () => {
  //     alert('변경 되었습니다.');
  //     queryClient.invalidateQueries('coupons');
  //   },
  // });

  // const { mutate: deleteCoupon } = useMutation(
  //   (body) => DeleteCouponAPI(body),
  //   {
  //     mutationKey: 'deleteCoupon',
  //     onSuccess: () => {
  //       alert('삭제 되었습니다.');
  //       navigate(-1);
  //       queryClient.invalidateQueries('coupons');
  //     },
  //   }
  // );

  const handleSave = () => {
    // updateCoupon(fetchPostDetail, {
    //   onSuccess: () => {
    //     // alert('변경 되었습니다.')
    //     // handleClickClose()
    //   },
    // });
  };

  const handleDelete = () => {
    // deleteCoupon(fetchPostDetail, {
    //   onSuccess: () => {
    //     // alert('변경 되었습니다.')
    //     // handleClickClose()
    //   },
    // });
  };

  return {
    fetchPostDetail,
    fetchMockPostDetail,
    isLoading,
    handleChange,
    handleSave,
    handleDelete,
  };
}
