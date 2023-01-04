import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentLayout } from '../../../layouts';
import { CustomDetailForm } from '../../../components';
import { productTab } from '../../../constansts';
import { useDetailTab } from '../../../hooks';
import { BasicInfo } from '../components';
import { useProduct } from '../api';

export default function ProductDetail() {
  const { id } = useParams();
  const productId = id || '';
  const { value, handleTabChange, TabPanel } = useDetailTab();
  const { isLoading, data } = useProduct({ productId });

  return (
    <ContentLayout title="상품 상세">
      <CustomDetailForm
        value={value}
        tabs={productTab}
        onTabChange={handleTabChange}
        loading={isLoading}
      >
        {productTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.id === 0 && <BasicInfo detail={data} />}
              {/* {tab.id === 1 && <MedicalCharts />} */}
            </TabPanel>
          );
        })}
      </CustomDetailForm>
    </ContentLayout>
  );
}
