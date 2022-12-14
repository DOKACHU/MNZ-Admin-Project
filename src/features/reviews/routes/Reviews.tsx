/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Typography, Rating } from '@mui/material';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { ReviewType } from '../types';
import { useReviews } from '../api';
import { usePagination } from '../../../hooks';

export default function Reviews() {
  const pagination = usePagination();
  const { isLoading, data } = useReviews({ ...pagination });

  return (
    <ContentLayout title="리뷰">
      <Table<ReviewType>
        loading={isLoading}
        {...pagination}
        total={data?.total_count}
        data={data?.reviewList}
        columns={[
          {
            id: 'bookingId',
            field: 'bookingId',
            title: '예약 번호',
          },
          {
            id: 'satisfied',
            field: 'satisfied',
            title: '만족 여부',
            Cell({ entry: { satisfied } }) {
              return <Typography>{satisfied ? 'O' : 'X'}</Typography>;
            },
          },
          {
            id: 'comment',
            field: 'comment',
            title: '리뷰 내용',
            Cell({ entry: { comment } }) {
              return (
                <Typography
                  sx={{
                    maxWidth: 200, // percentage also works
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {comment}
                </Typography>
              );
            },
          },
          {
            id: 'avarage',
            field: 'avarage',
            title: '평점',
            Cell({ entry: { rating1, rating2, rating3, rating4, rating5 } }) {
              const calcAverage =
                (rating1 + rating2 + rating3 + rating4 + rating5) / 5;
              return (
                <Rating
                  name="read-only"
                  value={Math.ceil(calcAverage)}
                  precision={0.5}
                  readOnly
                />
              );
            },
          },
        ]}
      />
    </ContentLayout>
  );
}
