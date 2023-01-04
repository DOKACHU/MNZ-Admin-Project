/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { usePoints } from '../api';
import { PointType } from '../types';
import { useModal } from '../../../hooks';
import { CreatePoints } from '../components';
import { numberWithCommas } from '../../../constansts';

export default function Points() {
  const { isLoading, data } = usePoints();
  const modal = useModal();

  return (
    <ContentLayout title="포인트" isButton {...modal}>
      <CreatePoints {...modal} />
      <Table<PointType>
        loading={isLoading}
        // data={data}
        data={data}
        columns={[
          {
            id: 'pointEventId',
            field: 'pointEventId',
            title: '포인트 번호',
          },
          {
            id: 'status',
            field: 'status',
            title: '상태',
          },
          {
            id: 'price',
            field: 'price',
            title: '가격',
            Cell({ entry: { price } }) {
              return <span>{`${numberWithCommas(price || 0)} P`}</span>;
            },
          },
          {
            id: 'reason',
            field: 'reason',
            title: '이유',
          },
        ]}
      />
    </ContentLayout>
  );
}
