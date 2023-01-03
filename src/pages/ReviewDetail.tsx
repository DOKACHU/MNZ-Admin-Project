/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';

import { Box, Grid, Divider } from '@mui/material';
import { DetailTemplate } from '../template';
import {
  MainDetailForm,
  MainSubCard,
  UserBasicRow,
  InfoBasicRow,
  InfoReviewRow,
} from '../components';
import {
  reviewTab,
  REVIEW_BASE_API,
  reviewBookingInfo,
  reviewProInfo,
  reviewCenterInfo,
  convertDate,
} from '../constansts';
import { useGetPostDetailById } from '../hooks';

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
  other?: any;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}
export default function ReviewDetail() {
  const { fetchPostDetail, isLoading } = useGetPostDetailById({
    BaseURL: REVIEW_BASE_API,
  });

  const [value, setValue] = useState<number>(0);

  const handleTabChange = (e: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <DetailTemplate loading={isLoading} title="리뷰 상세페이지">
      <MainDetailForm
        tabs={reviewTab}
        value={value}
        createDateText={`작성일 : ${convertDate(fetchPostDetail?.createdAt)}`}
      >
        {reviewTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.id === 0 && (
                <Grid container spacing={2} display="row" alignItems="center">
                  <Grid item xs={12}>
                    <MainSubCard title="세부 사항">
                      <UserBasicRow
                        title="작성자 정보"
                        detail={fetchPostDetail?.user}
                      />
                      <Grid item xs={12}>
                        <Divider />
                      </Grid>
                      <InfoReviewRow
                        title="리뷰 정보"
                        detail={fetchPostDetail}
                      />
                      <Grid item xs={12}>
                        <Divider />
                      </Grid>
                      <InfoBasicRow
                        title="예약 정보"
                        menus={reviewBookingInfo}
                        detail={fetchPostDetail?.booking}
                      />
                      <InfoBasicRow
                        title="프로 정보"
                        menus={reviewProInfo}
                        detail={fetchPostDetail?.pro}
                      />
                      <InfoBasicRow
                        title="센터 정보"
                        menus={reviewCenterInfo}
                        detail={fetchPostDetail?.center}
                      />
                      <Grid item xs={12}>
                        <Divider />
                      </Grid>
                    </MainSubCard>
                    {/* <ReviewBasicInfo detail={fetchPostDetail} /> */}
                  </Grid>
                </Grid>
              )}
              {/* {tab.label === 'etc' && <h1>[개발] 예정입니다.</h1>} */}
            </TabPanel>
          );
        })}
      </MainDetailForm>
    </DetailTemplate>
  );
}
