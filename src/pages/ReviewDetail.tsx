/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';

import { Box, Grid, Rating, Typography, Divider } from '@mui/material';
import { DetailTemplate } from '../template';
import {
  MainDetailForm,
  MainSubCard,
  UserBasicRow,
  InfoBasicRow,
  InfoReviewRow,
} from '../components';
import { reviewTab, REVIEW_BASE_API } from '../constansts';
import { useGetDetail } from '../hooks';

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
  const { fetchPostDetail, isLoading } = useGetDetail({
    BaseURL: REVIEW_BASE_API,
  });

  const [value, setValue] = useState<number>(0);

  const handleTabChange = (e: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <DetailTemplate loading={isLoading} title="리뷰 상세페이지" isButton>
      <MainDetailForm
        tabs={reviewTab}
        value={value}
        onTabChange={handleTabChange}
      >
        {reviewTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.id === 0 && (
                <Grid container spacing={2} display="row" alignItems="center">
                  <Grid item xs={12}>
                    <MainSubCard title="세부 사항">
                      <UserBasicRow title="작성자 정보" />
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
                        title="프로 정보"
                        detail={fetchPostDetail}
                      />
                      <InfoBasicRow
                        title="센터 정보"
                        detail={fetchPostDetail}
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
