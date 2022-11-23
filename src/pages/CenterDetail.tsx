/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';

import { Box, Grid } from '@mui/material';
import { DetailTemplate } from '../template';
import {
  MainDetailForm,
  MainProfile,
  CenterBasicInfo,
  CenterUploadImage,
  CenterSchedule,
} from '../components';
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
export default function CenterDetail() {
  const { fetchPostDetail, isLoading } = useGetDetail({
    BaseURL: CENTER_BASE_API,
  });
  const [value, setValue] = useState<number>(0);

  const handleTabChange = (e: any, newValue: any) => {
    setValue(newValue);
  };

  console.log(fetchPostDetail);

  return (
    <DetailTemplate
      loading={isLoading}
      title="센터 상세페이지"
      updateText="센터 수정"
      isButton
    >
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
                    <CenterBasicInfo detail={fetchPostDetail} />
                    <CenterUploadImage />
                  </Grid>
                  <Grid item sm={6} md={6}>
                    <CenterSchedule />
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
