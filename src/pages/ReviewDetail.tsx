/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';

import { Box, Grid, TextField, Rating, Typography } from '@mui/material';
import { DetailTemplate } from '../template';
import { MainDetailForm, ReviewBasicInfo, MainSubCard } from '../components';
import { centerTab, CENTER_BASE_API } from '../constansts';
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
  const { fetchPostDetail, fetchMockPostDetail, isLoading } = useGetDetail({
    BaseURL: CENTER_BASE_API,
  });

  // console.log('fetchMockPostDetail', fetchMockPostDetail);
  const [value, setValue] = useState<number>(0);

  const handleTabChange = (e: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <DetailTemplate loading={isLoading} title="리뷰 상세페이지" isButton>
      <MainDetailForm
        tabs={centerTab}
        value={value}
        onTabChange={handleTabChange}
      >
        {centerTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.label === 'profile' && (
                <Grid container spacing={3}>
                  <Grid item sm={6} md={6}>
                    <ReviewBasicInfo detail={fetchMockPostDetail} />
                  </Grid>
                  <Grid item sm={6} md={6}>
                    <MainSubCard title="평점 정보">
                      {fetchMockPostDetail && (
                        <>
                          <Grid
                            item
                            xs={12}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              // justifyContent: 'space-between',
                            }}
                          >
                            <Typography
                              variant="caption"
                              sx={{
                                mr: 2,
                              }}
                            >
                              질문 1
                            </Typography>
                            <Rating
                              name="read-only"
                              value={fetchMockPostDetail?.question1}
                              precision={0.5}
                              readOnly
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              // justifyContent: 'space-between',
                            }}
                          >
                            <Typography
                              variant="caption"
                              sx={{
                                mr: 2,
                              }}
                            >
                              질문 2
                            </Typography>
                            <Rating
                              name="read-only"
                              value={fetchMockPostDetail?.question2}
                              precision={0.5}
                              readOnly
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              // justifyContent: 'space-between',
                            }}
                          >
                            <Typography
                              variant="caption"
                              sx={{
                                mr: 2,
                              }}
                            >
                              질문 3
                            </Typography>
                            <Rating
                              name="read-only"
                              value={fetchMockPostDetail?.question3}
                              precision={0.5}
                              readOnly
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              // justifyContent: 'space-between',
                            }}
                          >
                            <Typography
                              variant="caption"
                              sx={{
                                mr: 2,
                              }}
                            >
                              질문 4
                            </Typography>
                            <Rating
                              name="read-only"
                              value={fetchMockPostDetail?.question4}
                              precision={0.5}
                              readOnly
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              // justifyContent: 'space-between',
                            }}
                          >
                            <Typography
                              variant="caption"
                              sx={{
                                mr: 2,
                              }}
                            >
                              질문 5
                            </Typography>
                            <Rating
                              name="read-only"
                              value={fetchMockPostDetail?.question5}
                              precision={0.5}
                              readOnly
                            />
                          </Grid>
                        </>
                      )}
                    </MainSubCard>
                  </Grid>
                </Grid>
              )}
              {tab.label === 'etc' && <h1>[개발] 예정입니다.</h1>}
            </TabPanel>
          );
        })}
      </MainDetailForm>
    </DetailTemplate>
  );
}
