/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Typography } from '@mui/material';
import { ContentLayout } from '../../../layouts';
import { Table } from '../../../components';
import { usePagination } from '../../../hooks';
import { useUsers } from '../api';
import { UserType } from '../types';
import { convertDate } from '../../../constansts';

export default function Users() {
  const pagination = usePagination();
  const { isLoading, data } = useUsers({ ...pagination });

  return (
    <ContentLayout title="유저">
      <Table<UserType>
        loading={isLoading}
        {...pagination}
        total={data?.total_count}
        data={data?.userList}
        columns={[
          {
            id: 'userId',
            field: 'userId',
            title: '유저 번호',
          },
          {
            id: 'email',
            field: 'email',
            title: '이메일',
          },
          {
            id: 'phoneNumber',
            field: 'phoneNumber',
            title: '핸드폰 번호',
          },
          {
            id: 'snsType',
            field: 'snsType',
            title: 'sns 유형',
          },
          {
            id: 'gender',
            field: 'gender',
            title: '성별',
            Cell({ entry: { gender } }) {
              return <Typography>{gender === 1 ? '남' : '여'}</Typography>;
            },
          },
          {
            id: 'phoneNumber',
            field: 'phoneNumber',
            title: '핸드폰 번호',
          },
          {
            id: 'age',
            field: 'age',
            title: '나이',
          },
          {
            id: 'termAgree',
            field: 'termAgree',
            title: '동의 여부',
            Cell({ entry: { termAgree } }) {
              return <Typography>{termAgree ? '동의' : '비 동의'}</Typography>;
            },
          },

          {
            id: 'createdAt',
            field: 'createdAt',
            title: '가입일',
            Cell({ entry: { createdAt } }) {
              return <Typography>{convertDate(createdAt)}</Typography>;
            },
          },
        ]}
      />
    </ContentLayout>
  );
}
