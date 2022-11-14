/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';

import { Box } from '@mui/material';
import { DetailTemplate } from '../template';
import { MainDetailForm, MainProfile } from '../components';
import { productTab, COUPON_BASE_API } from '../constansts';
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
  const { fetchPostDetail, isLoading } = useGetDetail({
    BaseURL: COUPON_BASE_API,
  });
  const [value, setValue] = useState<number>(0);

  const handleTabChange = (e: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <DetailTemplate loading={isLoading} title="상품 상세페이지" isButton>
      <MainDetailForm
        tabs={productTab}
        value={value}
        onTabChange={handleTabChange}
      >
        {productTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.label === 'profile' && <h1>[개발] 예정입니다.</h1>}
              {tab.label === 'etc' && <h1>[개발] 예정입니다.</h1>}
            </TabPanel>
          );
        })}
      </MainDetailForm>
    </DetailTemplate>
  );
}
