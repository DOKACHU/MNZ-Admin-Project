/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';

import { Box, Grid } from '@mui/material';
import { DetailTemplate } from '../template';
import { MainDetailForm, CouponBasicInfo } from '../components';
import { centerTab, COUPON_BASE_API } from '../constansts';
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
export default function CouponDetail() {
  const {
    fetchPostDetail,
    isLoading,
    handleUpadate,
    handleChange,
    handleDelete,
  } = useGetDetail({
    BaseURL: COUPON_BASE_API,
  });
  const [value, setValue] = useState<number>(0);

  const handleTabChange = (e: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <DetailTemplate
      loading={isLoading}
      title="쿠폰 상세페이지"
      isButton
      updateText="쿠폰 수정"
      deleteText="쿠폰 삭제"
      onUpadate={handleUpadate}
      onDelete={handleDelete}
    >
      <MainDetailForm tabs={centerTab} value={value}>
        {centerTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.id === 0 && (
                <Grid container spacing={3}>
                  <Grid item sm={6} md={6}>
                    <CouponBasicInfo
                      detail={fetchPostDetail}
                      onChange={handleChange}
                    />
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
