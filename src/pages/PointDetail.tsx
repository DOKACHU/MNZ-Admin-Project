/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';

import { Box, Grid, Typography, Stack } from '@mui/material';
import { DetailTemplate } from '../template';
import { MainDetailForm, PointBasicInfo, MainSubCard } from '../components';
import {
  centerTab,
  POINT_BASE_API,
  convertDate,
  numberWithCommas,
} from '../constansts';
import { useGetDetail } from '../hooks';

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
  other?: any;
}
const detailsIconSX = {
  width: 15,
  height: 15,
  verticalAlign: 'text-top',
  mr: 0.5,
  mt: 0.25,
};

const styleH4 = {
  color: '#212121',
  fontSize: 14,
  fontWeight: 600,
};

const styleSubtitle = {
  color: '#212121',
  fontSize: 14,
  fontWeight: 500,
};

const styleValue = {
  color: '#212121',
  fontWeight: 600,
};

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
export default function PointDetail() {
  const {
    fetchPostDetail,
    isLoading,
    handleUpadate,
    handleChange,
    handleDelete,
  } = useGetDetail({
    BaseURL: POINT_BASE_API,
  });
  const [value, setValue] = useState<number>(0);

  const handleTabChange = (e: any, newValue: any) => {
    setValue(newValue);
  };

  // console.log({ fetchPostDetail });

  return (
    <DetailTemplate
      loading={isLoading}
      title="포인터 상세페이지"
      // isButton
      updateText="포인트 수정"
      deleteText="포인트 삭제"
      onUpadate={handleUpadate}
      onDelete={handleDelete}
    >
      <MainDetailForm tabs={centerTab} value={value}>
        {centerTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.id === 0 && (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <MainSubCard title="세부 사항">
                      <Grid item xs={6}>
                        <Stack spacing={2}>
                          <Typography variant="h4" sx={styleH4}>
                            포인트 지급 정보
                          </Typography>
                          <Stack spacing={0}>
                            {/* <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                포인트 번호 :
                              </Typography>
                              <Typography variant="body2" sx={styleValue}>
                                {fetchPostDetail?.pointEventId}
                              </Typography>
                            </Stack> */}
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                포인트 상태 :
                              </Typography>
                              <Typography variant="body2" sx={styleValue}>
                                {fetchPostDetail?.status === 'add'
                                  ? '지급'
                                  : '차감'}
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                사유:
                              </Typography>
                              <Typography variant="body2" sx={styleValue}>
                                {fetchPostDetail?.reason}
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                포인트 :
                              </Typography>
                              <Typography variant="body2" sx={styleValue}>
                                {numberWithCommas(
                                  Number(fetchPostDetail?.price)
                                )}
                              </Typography>
                            </Stack>

                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                생성 일시 :
                              </Typography>
                              <Typography variant="body2" sx={styleValue}>
                                {convertDate(fetchPostDetail?.createdAt)}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack spacing={2}>
                          <Typography variant="h4" sx={styleH4}>
                            유저 정보
                          </Typography>
                          <Stack spacing={0}>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                유저 번호 :
                              </Typography>
                              <Typography variant="body2" sx={styleValue}>
                                {fetchPostDetail?.userId}
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Typography
                                variant="subtitle1"
                                sx={styleSubtitle}
                              >
                                이름 :
                              </Typography>
                              <Typography variant="body2" sx={styleValue}>
                                테스트
                              </Typography>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Grid>
                    </MainSubCard>
                    {/* <PointBasicInfo
                      detail={fetchPostDetail}
                      onChange={handleChange}
                    /> */}
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
