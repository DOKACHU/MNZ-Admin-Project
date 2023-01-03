import React from 'react';
import { Grid, Typography, Stack, Divider } from '@mui/material';
import {
  reviewBookingInfo,
  reviewProInfo,
  reviewCenterInfo,
  convertDate,
} from '../../../constansts';

import {
  MainDetailForm,
  MainSubCard,
  UserBasicRow,
  InfoBasicRow,
  InfoReviewRow,
} from '../../../components';

interface BasicInfoProps {
  detail?: any;
}
export default function BasicInfo({ detail }: BasicInfoProps) {
  console.log(detail.booking);

  const newBooking = {
    ...detail.booking,
    bookingDate: convertDate(detail.booking.bookingDate),
    startTime: convertDate(detail.booking.startTime),
    endTime: convertDate(detail.booking.endTime),
  };

  return (
    <Grid container spacing={2} display="row" alignItems="center">
      <Grid item xs={12}>
        <MainSubCard title="세부 사항">
          <UserBasicRow title="작성자 정보" detail={detail?.user} />
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <InfoReviewRow title="리뷰 정보" detail={detail} />
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <InfoBasicRow
            title="예약 정보"
            menus={reviewBookingInfo}
            detail={newBooking}
          />
          <InfoBasicRow
            title="프로 정보"
            menus={reviewProInfo}
            detail={detail?.pro}
          />
          <InfoBasicRow
            title="센터 정보"
            menus={reviewCenterInfo}
            detail={detail?.center}
          />
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </MainSubCard>
        {/* <ReviewBasicInfo detail={detail} /> */}
      </Grid>
    </Grid>
  );
}
