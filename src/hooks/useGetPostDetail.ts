/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { CENTER_LIST_API } from '../constansts';

const GetCenterListAPI = async () => {
  const URL = `${CENTER_LIST_API}?per_page=10&cursor=1`;
  const { data } = await axios.get(URL);
  return data;
};

export function useGetDetail() {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { id: rowId } = useParams();

  const [fetchPostDetail, setFetchPostDetail] = useState<any>(null);
  // const [updateInfo, setUpdateInfo] = useState(null)

  const { data, isLoading } = useQuery(['details'], () => GetCenterListAPI());

  useEffect(() => {
    if (data) {
      const result = data.centerList.filter(
        (post: any) => post.center_id === rowId
      );
      setFetchPostDetail(result[0]);
    }
  }, [data, rowId]);

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
    isLoading,
    handleChange,
    handleSave,
    handleDelete,
  };
}
