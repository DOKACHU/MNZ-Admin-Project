/* eslint-disable react/jsx-props-no-spreading */

import { DetailTemplate } from '../template';
import { MainDetailForm } from '../components';
import { centerTab } from '../constansts';
import { useGetDetail } from '../hooks';

export default function CenterDetail() {
  const { fetchPostDetail } = useGetDetail();
  console.log('fetchPostDetail', fetchPostDetail);
  return (
    <DetailTemplate title="센터 상세페이지" isButton>
      <MainDetailForm tabs={centerTab} />
    </DetailTemplate>
  );
}
