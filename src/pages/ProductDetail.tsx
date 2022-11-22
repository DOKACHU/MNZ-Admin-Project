/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';

import { Box, Grid, TextField } from '@mui/material';
import { DetailTemplate } from '../template';
import { MainDetailForm, MainSubCard } from '../components';
import { productTab, PRODUCT_BASE_API } from '../constansts';
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
    BaseURL: PRODUCT_BASE_API,
  });
  const [value, setValue] = useState<number>(0);

  const handleTabChange = (e: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <DetailTemplate
      loading={isLoading}
      title="상품 상세페이지"
      updateText="상품 수정"
      isButton
    >
      <MainDetailForm
        tabs={productTab}
        value={value}
        onTabChange={handleTabChange}
      >
        {productTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.label === 'profile' && (
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <MainSubCard title="기본 정보">
                      <Grid item xs={12}>
                        <TextField
                          helperText="상품 번호"
                          size="small"
                          id="outlined-basic1"
                          fullWidth
                          // label="Name"
                          value={fetchPostDetail?.productId}
                          disabled
                          // defaultValue={user?.name}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          helperText="상품 이름"
                          size="small"
                          id="outlined-basic1"
                          fullWidth
                          // label="Name"
                          value={fetchPostDetail?.name}
                          // defaultValue={user?.name}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          helperText="상품 설명"
                          size="small"
                          id="outlined-basic1"
                          fullWidth
                          // label="Name"
                          value={fetchPostDetail?.description}
                          // defaultValue={user?.name}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          helperText="상품 가격"
                          size="small"
                          id="outlined-basic1"
                          fullWidth
                          // label="Name"
                          value={fetchPostDetail?.price}
                          // defaultValue={user?.name}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          helperText="할인율"
                          size="small"
                          id="outlined-basic1"
                          fullWidth
                          // label="Name"
                          value={fetchPostDetail?.discountRate}
                          // defaultValue={user?.name}
                        />
                      </Grid>
                    </MainSubCard>
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
